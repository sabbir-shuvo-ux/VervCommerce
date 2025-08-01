import React from "react";
import type { ProductType } from "@/types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getRatingStars } from "@/lib/getRatingStars";
import Link from "next/link";

const ProductCard = ({ products }: { products: ProductType[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {products.map((product: ProductType) => (
        <div key={product.id} className="bg-white rounded-3xl group">
          <Link
            href={`/product/${product.id}`}
            className="relative w-full max-h-[250px] h-[250px] block"
          >
            <Image
              width={250}
              height={250}
              src={product.image}
              alt={product.title}
              className="object-contain rounded-3xl w-full h-auto max-h-[250px]"
            />

            <span className="absolute top-2 right-2 bg-primary text-xs h-fit font-light text-white rounded-full capitalize px-2 py-1">
              {product.category}
            </span>
          </Link>
          <div className="px-4 pt-6 pb-4 overflow-hidden w-full group-hover:bg-accent transition-all duration-300">
            <h3 className="truncate text-xl font-semibold mb-2">
              {product.title}
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-[2px] items-center text-yellow-500">
                {getRatingStars(product.rating.rate)}
              </div>
              <span className="text-xs group-hover:underline">
                ({product.rating.count} reviews)
              </span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <h4 className="text-xl font-semibold">${product.price}</h4>
              <Button className="h-[45px] rounded-3xl">Add to Cart</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
