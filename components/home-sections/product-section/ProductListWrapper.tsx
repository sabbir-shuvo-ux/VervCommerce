"use client";
import React, { useState, useEffect } from "react";
import type { ProductType } from "@/types";
import ProductCard from "./ProductCard";
import { Loader } from "lucide-react";

const PAGE_SIZE = 8;

const ProductListWrapper = ({ products }: { products: ProductType[] }) => {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    if (visibleCount >= products.length) return;
    setLoading(true);

    // Dealy for loading
    setTimeout(() => {
      setVisibleCount((count) => Math.min(count + PAGE_SIZE, products.length));
      setLoading(false);
    }, 1500);
  };

  // Infinite scroll
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 100
    ) {
      if (!loading) loadMore();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, visibleCount]);

  return (
    <>
      <ProductCard products={products.slice(0, visibleCount)} />
      {loading && (
        <div className="text-center py-10 text-gray-500 w-full flex items-center justify-center gap-4">
          <Loader className="animate-spin" size={20} />{" "}
          <p>Loading more products...</p>
        </div>
      )}
      {!loading && visibleCount >= products.length && (
        <div className="text-center py-6 text-gray-400 w-full">
          No more products
        </div>
      )}
    </>
  );
};

export default ProductListWrapper;
