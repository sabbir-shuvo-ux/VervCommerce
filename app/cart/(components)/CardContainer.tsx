"use client";
import { Button } from "@/components/ui/button";
import { useHydration } from "@/hooks/useHydration";
import { useProductStore } from "@/store/useProductStore";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const CardContainer = () => {
  const { cartItems, updateQuantity, clearCart, removeFromCart } =
    useProductStore();
  const hasHydrated = useHydration();

  if (!hasHydrated) {
    return (
      <div className="text-center py-10 text-gray-500 w-full flex items-center justify-center gap-4">
        <Loader className="animate-spin" size={20} />
        <p>Loading...</p>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
        <p className="text-gray-500">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      {/* Cart Items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center justify-end">
            <Button
              variant={"destructive"}
              size="default"
              onClick={() => clearCart()}
            >
              <MdDelete />
              Clear Cart
            </Button>
          </div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between border p-4 rounded-lg shadow-sm"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  width={100}
                  height={100}
                  alt={item.title}
                  className="w-24 h-24 rounded-md object-cover"
                />
                <div>
                  <h2 className="text-lg font-semibold hover:underline">
                    <Link href={`/product/${item.id}`}>{item.title}</Link>
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
          ))}
        </div>

        {/* Summary */}
        <div className="border p-6 rounded-lg shadow-md h-fit sticky top-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>
                $
                {cartItems
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Tax (10%)</span>
              <span>
                $
                {(
                  cartItems.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  ) * 0.1
                ).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between font-bold border-t pt-2">
              <span>Total</span>
              <span>
                $
                {(
                  cartItems.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  ) +
                  cartItems.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  ) *
                    0.1
                ).toFixed(2)}
              </span>
            </div>
          </div>

          <Button className="mt-6 w-full py-2 rounded-md transition">
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CardContainer;
