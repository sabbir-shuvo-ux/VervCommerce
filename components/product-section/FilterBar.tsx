import Combobox from "@/components/ui/Combobox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProductStore } from "@/store/useProductStore";
import { useHydration } from "@/hooks/useHydration";
import { Button } from "@/components/ui/button";
import SearchInput from "../navbar/SearchInput";

export function FilterBar({ categories }: { categories: string[] }) {
  const hasHydrated = useHydration();
  const { setFilterCategory, filters, setSortBy, resetFilters } =
    useProductStore();

  return (
    <div className="mb-8 flex items-center gap-4 justify-between container px-4 mx-auto">
      <div className="flex items-end justify-start gap-4 flex-wrap max-sm:justify-center">
        <div>
          {/* filter category wise */}
          <h3 className="text-lg font-semibold mb-2">Filter by category</h3>
          <Combobox
            value={hasHydrated ? filters.category || "" : ""}
            setValue={setFilterCategory}
            data={categories.map((category) => ({
              value: category,
              label: category,
            }))}
          />
        </div>

        {/* sort by */}
        <div className="">
          <h3 className="text-lg font-semibold mb-2">Sort by Price/Rating</h3>
          <Select
            onValueChange={(value) =>
              setSortBy(value as "price-asc" | "price-desc" | "rating" | null)
            }
            value={hasHydrated ? filters.sortBy || "" : ""}
          >
            <SelectTrigger className="w-[180px] bg-white hover:bg-accent cursor-pointer hover:text-primary">
              <SelectValue placeholder="Sort by price" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Price</SelectLabel>
                <SelectItem value="price-asc">Low to High</SelectItem>
                <SelectItem value="price-desc">High to Low</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Rating</SelectLabel>
                <SelectItem value="rating">High to Low</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* reset button */}
        {filters.category || filters.sortBy ? (
          <Button variant="outline" onClick={resetFilters}>
            Reset
          </Button>
        ) : null}
      </div>

      <div className="flex items-center justify-center max-lg:hidden">
        <SearchInput />
      </div>
    </div>
  );
}
