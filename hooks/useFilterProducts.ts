import type { ProductType } from "@/types";
import { useProductStore } from "@/store/useProductStore";

export const useFilteredProducts = (products: ProductType[]) => {
  const { filters } = useProductStore();
  const search = filters.search.toLowerCase();

  let filtered = products;

  // by category
  if (filters.category) {
    filtered = filtered.filter((p) => p.category === filters.category);
  }

  //   search
  if (search) {
    filtered = filtered.filter((p) => p.title.toLowerCase().includes(search));
  }

  //   sort
  if (filters.sortBy === "price-asc") {
    filtered = filtered.sort((a, b) => a.price - b.price);
  } else if (filters.sortBy === "price-desc") {
    filtered = filtered.sort((a, b) => b.price - a.price);
  } else if (filters.sortBy === "rating") {
    filtered = filtered.sort((a, b) => b.rating.rate - a.rating.rate);
  }

  return filtered;
};
