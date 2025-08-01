"use client";

import { PlusIcon, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useProductStore } from "@/store/useProductStore";

const NavbarActions = () => {
  const { cartItems } = useProductStore();

  return (
    <div className="flex items-center gap-4">
      <Button
        asChild
        size="icon"
        variant={"ghost"}
        className="text-base relative h-[45px] px-8"
      >
        <Link href="/cart">
          <span className="flex items-baseline gap-2">
            <span className="text-xs absolute top-0 right-2 bg-primary text-primary-foreground rounded-full w-4 h-4 flex items-center justify-center">
              {cartItems.reduce((total, item) => total + item.quantity, 0)}
            </span>
            <ShoppingCartIcon className="size-6" />
          </span>
        </Link>
      </Button>
      <Button
        variant="default"
        asChild
        className="max-sm:p-0 w-full h-[45px] px-8"
      >
        <Link href="/create">
          <PlusIcon className="size-5 sm:-ms-1" aria-hidden="true" />
          <span className="max-sm:sr-only">Add new</span>
        </Link>
      </Button>
    </div>
  );
};

export default NavbarActions;
