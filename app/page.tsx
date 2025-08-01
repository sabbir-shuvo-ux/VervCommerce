import ProductContainer from "@/components/product-section/ProductContainer";
import { FullProductListSkeleton } from "@/components/product-section/ProductListLoadingUI";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<FullProductListSkeleton />}>
      <ProductContainer />
    </Suspense>
  );
}
