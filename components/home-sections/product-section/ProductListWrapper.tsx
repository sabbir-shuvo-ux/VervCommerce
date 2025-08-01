"use client";
import { useFilteredProducts } from "@/hooks/useFilterProducts";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import type { ProductType } from "@/types";
import { Loader } from "lucide-react";
import { FilterBar } from "./FilterBar";
import ProductList from "./ProductList";

const ProductListWrapper = ({
  products,
  categories,
}: {
  products: ProductType[];
  categories: string[];
}) => {
  const filteredProducts = useFilteredProducts(products);

  const { visibleItems, loading, canLoadMore } = useInfiniteScroll<ProductType>(
    {
      items: filteredProducts,
      pageSize: 8,
      delay: 1500,
    }
  );

  return (
    <>
      <FilterBar categories={categories} />

      <ProductList products={visibleItems} />

      {loading && (
        <div className="text-center py-10 text-gray-500 w-full flex items-center justify-center gap-4">
          <Loader className="animate-spin" size={20} />
          <p>Loading more products...</p>
        </div>
      )}

      {!loading && !canLoadMore && filteredProducts.length > 0 && (
        <div className="text-center py-6 text-gray-400 w-full">
          No more products
        </div>
      )}

      {filteredProducts.length === 0 && (
        <div className="text-center py-6 text-gray-400 w-full h-[100vh]">
          No products found.
        </div>
      )}
    </>
  );
};

export default ProductListWrapper;
