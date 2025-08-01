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
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 100
    ) {
      loadMore();
    }
  }, [loadMore]);

  useEffect(() => {
    if (items.length === 0) return;
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, items.length]);

  return {
    visibleItems: items.slice(0, visibleCount),
    loading,
    canLoadMore,
  };
};
