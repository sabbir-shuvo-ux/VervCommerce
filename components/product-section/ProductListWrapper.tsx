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

const ProductListWrapper = ({
  products,
  categories,
}: {
  products: ProductType[];
  categories: string[];
}) => {
  const hasHydrated = useHydration();
  const filteredProducts = useFilteredProducts(products);

  const { visibleItems, loading, canLoadMore } = useInfiniteScroll<ProductType>(
    {
      items: filteredProducts,
      pageSize: 8,
      delay: 1500,
    }
  );

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
          Search result didn't match.
        </div>
      )}
    </>
  );
};

export default ProductListWrapper;
