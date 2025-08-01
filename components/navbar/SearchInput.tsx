"use client";
import { useProductStore } from "@/store/useProductStore";
import { useHydration } from "@/hooks/useHydration";
import { useId } from "react";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const SearchInput = ({ className }: { className?: string }) => {
  const id = useId();
  const hasHydrated = useHydration();
  const { setSearch, filters } = useProductStore();

  return (
    <div className="relative">
      <Input
        id={id}
        className={cn(
          "peer ps-8 pe-2 border border-primary placeholder:text-primary/60 h-[45px] w-full max-w-[400px] min-w-[300px] rounded-md",
          className
        )}
        placeholder="Search..."
        type="search"
        value={hasHydrated ? filters.search : ""}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 peer-disabled:opacity-50">
        <SearchIcon size={16} className="text-primary" />
      </div>
    </div>
  );
};

export default SearchInput;
