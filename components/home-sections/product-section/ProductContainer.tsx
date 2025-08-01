import type { ProductType } from "@/types";
import ProductListWrapper from "./ProductListWrapper";

const getProductData = async (): Promise<ProductType[]> => {
  const res = await fetch(`${process.env.API_BASE_URL}/products`, {
    cache: "force-cache",
    next: { revalidate: 60 * 60 * 24 },
  });
  if (!res.ok) throw new Error("Failed to fetch products");

  const data: ProductType[] = await res.json();
  return data;
};

const ProductContainer = async () => {
  const products = await getProductData();

  return (
    <section className="container px-4 mx-auto bg-secondary py-8">
      <ProductListWrapper products={products} />
    </section>
  );
};

export default ProductContainer;
