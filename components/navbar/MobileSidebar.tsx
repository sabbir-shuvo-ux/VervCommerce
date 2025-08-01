"use client";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import SearchInput from "./SearchInput";

type Props = {
  className?: string;
};

const MobileSidebar = ({ className }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className={cn("cursor-pointer", className)}>
        <Menu className="text-primary size-6" />
      </SheetTrigger>
      <SheetContent side="left" className={cn(className)}>
        <SheetHeader>
          <SheetTitle className="text-xl font-semibold mb-4">
            VervCommerce
          </SheetTitle>
          <SheetDescription />
          {/* search input */}
          <div className="flex gap-2 items-center justify-center w-full flex-wrap max-sm:justify-start">
            <SearchInput className="min-w-full" />
            <Button
              variant={"outline"}
              className="h-[45px] border-primary text-primary"
              onClick={() => setOpen(false)}
            >
              Submit
            </Button>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
