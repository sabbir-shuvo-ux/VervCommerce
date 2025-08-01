import { Feather } from "lucide-react";

import Link from "next/link";
import MobileSidebar from "./MobileSidebar";
import NavbarActions from "./NavbarActions";
import SearchInput from "./SearchInput";

export default function Navbar() {
  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4 max-w-[1536px] mx-auto">
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
        {/* Right */}
        <NavbarActions />
      </div>
    </header>
  );
}
