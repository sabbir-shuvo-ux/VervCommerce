import { create } from "zustand";
import type { ProductType } from "@/types";
import { createJSONStorage, persist } from "zustand/middleware";

interface CartItem extends ProductType {
  quantity: number;
}

interface StoreState {
  cartItems: CartItem[];
  createdProducts: ProductType[];
  filters: {
    category: string | null;
    search: string;
    sortBy: "price-asc" | "price-desc" | "rating" | null;
  };
  _hasHydrated: boolean;
  addToCart: (product: ProductType) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  setFilterCategory: (category: string | null) => void;
  setSearch: (search: string) => void;
  setSortBy: (sortBy: "price-asc" | "price-desc" | "rating" | null) => void;
  clearCart: () => void;
  resetFilters: () => void;
  isInCart: (productId: number) => boolean;
  getCartItemById: (id: number) => CartItem | undefined;
  setHasHydrated: (hasHydrated: boolean) => void;
  addCreatedProduct: (product: ProductType) => void;
  removeCreatedProduct: (productId: number) => void;
  isInCreatedProducts: (productId: number) => boolean;
}

export const useProductStore = create<StoreState>()(
  persist(
    (set, get) => ({
      cartItems: [],
      createdProducts: [],
      filters: {
        category: null,
        search: "",
        sortBy: null,
      },
      _hasHydrated: false,

      // cart methods
      addToCart: (product) =>
        set((state) => {
          const exists = state.cartItems.find((item) => item.id === product.id);
          if (exists) {
            return {
              cartItems: state.cartItems.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          return {
            cartItems: [...state.cartItems, { ...product, quantity: 1 }],
          };
        }),

      removeFromCart: (productId) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== productId),
        })),

      updateQuantity: (productId, quantity) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.id === productId
              ? { ...item, quantity: Math.max(1, quantity) }
              : item
          ),
        })),

      clearCart: () => set({ cartItems: [] }),

      // created products methods
      addCreatedProduct: (product) =>
        set((state) => ({
          createdProducts: [...state.createdProducts, product],
        })),
      removeCreatedProduct: (productId) =>
        set((state) => ({
          createdProducts: state.createdProducts.filter(
            (item) => item.id !== productId
          ),
        })),

      isInCreatedProducts: (productId) => {
        const cart = get().createdProducts;
        return cart.some((item) => item.id === productId);
      },

      // filter and sort methods
      setFilterCategory: (category) =>
        set((state) => ({ filters: { ...state.filters, category } })),
      setSearch: (search) =>
        set((state) => ({ filters: { ...state.filters, search } })),
      setSortBy: (sortBy: "price-asc" | "price-desc" | "rating" | null) =>
        set((state) => ({ filters: { ...state.filters, sortBy } })),

      // check if product is in cart
      isInCart: (productId) => {
        const cart = get().cartItems;
        return cart.some((item) => item.id === productId);
      },
      // get cart item by id
      getCartItemById: (id) => get().cartItems.find((item) => item.id === id),

      // hydration method
      setHasHydrated: (hasHydrated) => set({ _hasHydrated: hasHydrated }),

      // reset filters
      resetFilters: () =>
        set({ filters: { category: null, search: "", sortBy: null } }),
    }),
    {
      name: "product-store",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
