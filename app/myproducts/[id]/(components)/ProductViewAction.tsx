"use client";
import { ProductType } from "@/types";
import { useProductStore } from "@/store/useProductStore";
import { Button } from "@/components/ui/button";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useState } from "react";

const ProductViewAction = ({ product }: { product: ProductType }) => {
  const { isInCart, updateQuantity, getCartItemById, addToCart } =
    useProductStore();
  const [loading, setLoading] = useState(false);

  const quantity = getCartItemById(product.id)?.quantity ?? 1;

  const handleAddToCart = (product: ProductType) => {
    setLoading(true);
    addToCart(product);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <div>
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
  );
};

export default ProductViewAction;
