import { useState, useEffect, useCallback } from "react";

interface UseInfiniteScrollProps<T> {
  items: T[];
  pageSize?: number;
  delay?: number;
}

export const useInfiniteScroll = <T>({
  items,
  pageSize = 8,
  delay = 1000,
}: UseInfiniteScrollProps<T>) => {
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const [loading, setLoading] = useState(false);

  const canLoadMore = visibleCount < items.length;

  const loadMore = useCallback(() => {
    if (!canLoadMore || loading) return;
    setLoading(true);

    setTimeout(() => {
      setVisibleCount((count) => Math.min(count + pageSize, items.length));
      setLoading(false);
    }, delay);
  }, [canLoadMore, loading, pageSize, items.length, delay]);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Check if we're near the bottom (within 200px)
    if (scrollTop + windowHeight >= documentHeight - 200) {
      loadMore();
    }
  }, [loadMore]);

  // Check if we need to load more content initially
  const checkInitialLoad = useCallback(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // If the document height is less than or equal to window height,
    // or if very close to the bottom, load more
    if (documentHeight <= windowHeight || documentHeight - windowHeight < 300) {
      loadMore();
    }
  }, [loadMore]);

  useEffect(() => {
    if (items.length === 0) return;

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Check initial load after a short delay to ensure DOM is rendered
    const initialCheckTimer = setTimeout(() => {
      checkInitialLoad();
    }, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(initialCheckTimer);
    };
  }, [handleScroll, checkInitialLoad, items.length]);

  // Reset visible count when items change
  useEffect(() => {
    setVisibleCount(pageSize);
  }, [items.length, pageSize]);

  return {
    visibleItems: items.slice(0, visibleCount),
    loading,
    canLoadMore,
  };
};
