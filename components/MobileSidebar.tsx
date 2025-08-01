"use client";
import { Menu, SearchIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useState } from "react";

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
          <div className="flex gap-2 items-center justify-center w-full">
            <div className="relative w-full">
              <Input
                className="peer ps-8 pe-2 border border-primary placeholder:text-primary/60 h-[45px] w-full rounded-md"
                placeholder="Search..."
                type="search"
              />
              <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 peer-disabled:opacity-50">
                <SearchIcon size={16} className="text-primary" />
              </div>
            </div>
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
