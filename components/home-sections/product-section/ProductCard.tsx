import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getRatingStars } from "@/lib/getRatingStars";
import type { ProductType } from "@/types";
import { useProductStore } from "@/store/useProductStore";
import { FaMinus, FaPlus } from "react-icons/fa6";

const ProductCard = ({ product }: { product: ProductType }) => {
  const { addToCart, isInCart, updateQuantity, getCartItemById } =
    useProductStore();
  const [loading, setLoading] = useState(false);

  // get quantity from cart
  const quantity = getCartItemById(product.id)?.quantity ?? 1;

  const handleAddToCart = (product: ProductType) => {
    setLoading(true);
    addToCart(product);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <div key={product.id} className="bg-white rounded-3xl group">
      <Link
        href={`/products/${product.id}`}
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
        <h3 className="truncate text-xl font-semibold mb-2">{product.title}</h3>
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
          {isInCart(product.id) ? (
            <div className="mt-4 md:mt-0 flex items-center gap-4">
              <Button
                variant="secondary"
                size="icon"
                onClick={() =>
                  updateQuantity(product.id, Math.max(1, quantity - 1))
                }
              >
                <FaMinus />
              </Button>
              <span className="text-lg font-medium">{quantity}</span>
              <Button
                size="icon"
                variant="secondary"
                onClick={() => updateQuantity(product.id, quantity + 1)}
              >
                <FaPlus />
              </Button>
            </div>
          ) : (
            <Button
              className="h-[45px] rounded-3xl"
              onClick={() => handleAddToCart(product)}
              disabled={loading}
            >
              {loading ? "Adding..." : "Add to Cart"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
