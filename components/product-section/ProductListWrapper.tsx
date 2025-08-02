"use client";
import { useFilteredProducts } from "@/hooks/useFilterProducts";
import { useHydration } from "@/hooks/useHydration";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import type { ProductType } from "@/types";
import { FilterBar } from "./FilterBar";
import ProductList from "./ProductList";
import {
  FullProductListSkeleton,
  ProductListCardSkeleton,
} from "./ProductListLoadingUI";
import { useEffect } from "react";
import { useProductStore } from "@/store/useProductStore";

const ProductListWrapper = ({
  products,
  categories,
}: {
  products: ProductType[];
  categories: string[];
}) => {
  const hasHydrated = useHydration();
  const newProducts = useProductStore((state) => state.createdProducts);
  const mergedProducts = [...newProducts, ...products];

  const filteredProducts = useFilteredProducts(mergedProducts);

  const { visibleItems, loading, canLoadMore } = useInfiniteScroll<ProductType>(
    {
      items: filteredProducts,
      pageSize: 8,
      delay: 1500,
    }
  );

  // Ensure proper loading when content is insufficient
  useEffect(() => {
    if (hasHydrated && filteredProducts.length > visibleItems.length) {
      const checkScroll = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // If there's not enough content to scroll, trigger load more
        if (documentHeight <= windowHeight + 100) {
          // Small delay to ensure the current content is rendered
          setTimeout(() => {
            const newDocumentHeight = document.documentElement.scrollHeight;
            if (
              newDocumentHeight <= windowHeight + 100 &&
              canLoadMore &&
              !loading
            ) {
              // Force a scroll event to trigger load more
              window.dispatchEvent(new Event("scroll"));
            }
          }, 200);
        }
      };

      // Check after a short delay to ensure DOM is updated
      const timer = setTimeout(checkScroll, 100);
      return () => clearTimeout(timer);
    }
  }, [
    hasHydrated,
    filteredProducts.length,
    visibleItems.length,
    canLoadMore,
    loading,
  ]);

  // donty render until hydration complete
  if (!hasHydrated) {
    return <FullProductListSkeleton />;
  }

  return (
    <>
      {/* filter section */}
      <FilterBar categories={categories} />

      {/* product list */}
      <ProductList products={visibleItems} />

      {loading && <ProductListCardSkeleton />}

      {!loading && !canLoadMore && filteredProducts.length > 0 && (
        <div className="text-center py-6 text-gray-400 w-full">
          No more products
        </div>
      )}

      {filteredProducts.length === 0 && (
        <div className="text-center py-6 text-gray-400 w-full h-[100vh]">
          Search result didn&apos;t match.
        </div>
      )}
    </>
  );
};

export default ProductListWrapper;
