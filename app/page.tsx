import ProductContainer from "@/components/home-sections/product-section/ProductContainer";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductContainer />
    </Suspense>
  );
}
