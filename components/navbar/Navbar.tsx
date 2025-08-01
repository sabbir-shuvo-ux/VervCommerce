import { Feather, PlusIcon, SearchIcon, ShoppingCartIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import MobileSidebar from "./MobileSidebar";
import SearchInput from "./SearchInput";

export default function Navbar() {
  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex flex-1 items-center gap-2">
          <MobileSidebar className={"max-lg:block hidden"} />

          <div className="flex flex-1 items-center gap-6 justify-between">
            <div className="flex items-center gap-6">
              <Link
                href="/"
                title="VervCommerce"
                className="text-primary hover:text-primary/90 flex items-center gap-2 text-xl"
              >
                <Feather className="size-6" />
                <span className="font-semibold">VervCommerce</span>
              </Link>
            </div>
            {/* Search form */}
            <div className="flex w-full items-center justify-center max-lg:hidden">
              <SearchInput />
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-4">
          <Button
            asChild
            size="icon"
            variant={"ghost"}
            className="text-base relative h-[45px] px-8"
          >
            <a href="#">
              <span className="flex items-baseline gap-2">
                <span className="text-xs absolute top-0 right-2 bg-primary text-primary-foreground rounded-full w-4 h-4 flex items-center justify-center">
                  2
                </span>
                <ShoppingCartIcon className="size-6" />
              </span>
            </a>
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
      </div>
    </header>
  );
}
