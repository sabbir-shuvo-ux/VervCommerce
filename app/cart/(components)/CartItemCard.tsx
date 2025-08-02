import { ProductType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { CartItem, useProductStore } from "@/store/useProductStore";

const CartItemCard = ({ item }: { item: CartItem }) => {
  const { updateQuantity, removeFromCart, isInCreatedProducts } =
    useProductStore();
  const isOrwnProduct = isInCreatedProducts(item.id);
  return (
    <div
      key={item.id}
      className="flex flex-col md:flex-row items-center justify-between border p-4 rounded-lg shadow-sm"
    >
      <div className="flex items-center gap-4">
        <Image
          src={item.image ? item.image : "/dummy-product-image.jpg"}
          width={100}
          height={100}
          alt={item.title}
          className="w-24 h-24 rounded-md object-cover"
        />
        <div>
          <h2 className="text-lg font-semibold hover:underline">
            <Link
              href={
                isOrwnProduct
                  ? `/myproducts/${item.id}`
                  : `/products/${item.id}`
              }
            >
              {item.title}
            </Link>
          </h2>
          <p className="text-gray-500 text-sm">{item.category}</p>
          <p className="mt-1 text-sm font-medium text-green-600">
            ${item.price}
          </p>
        </div>
      </div>
      <div className="mt-4 md:mt-0 flex items-center gap-4">
        <Button
          variant="secondary"
          size="icon"
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
        >
          <FaMinus />
        </Button>
        <span className="text-lg font-medium">{item.quantity}</span>
        <Button
          size="icon"
          variant="secondary"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
        >
          <FaPlus />
        </Button>
        <Button
          variant="destructive"
          size="icon"
          onClick={() => removeFromCart(item.id)}
        >
          <IoMdClose />
        </Button>
      </div>
    </div>
  );
};

export default CartItemCard;
