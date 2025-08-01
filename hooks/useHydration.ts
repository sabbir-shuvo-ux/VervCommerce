import { useEffect, useState } from "react";
import { useProductStore } from "@/store/useProductStore";

export const useHydration = () => {
  const [hasHydrated, setHasHydrated] = useState(false);
  const storeHasHydrated = useProductStore((state) => state._hasHydrated);

  useEffect(() => {
    if (storeHasHydrated) {
      setHasHydrated(true);
    }
  }, [storeHasHydrated]);

  return hasHydrated;
};
