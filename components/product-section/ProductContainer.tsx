import type { ProductType } from "@/types";
import ProductListWrapper from "./ProductListWrapper";

// get server side products
const getProductData = async (): Promise<ProductType[]> => {
  const res = await fetch(`${process.env.API_BASE_URL}/products`, {
    cache: "force-cache",
    next: { revalidate: 60 * 60 * 24 },
  });
  if (!res.ok) throw new Error("Failed to fetch products");

  const data: ProductType[] = await res.json();
  return data;
};

// get server side categories
const getCategoriesData = async (): Promise<string[]> => {
  const res = await fetch(`${process.env.API_BASE_URL}/products/categories`, {
    cache: "force-cache",
    next: { revalidate: 60 * 60 * 24 },
  });
  if (!res.ok) throw new Error("Failed to fetch products");

  const data: string[] = await res.json();
  return data;
};

const ProductContainer = async () => {
  const [products, categories] = await Promise.all([
    getProductData(),
    getCategoriesData(),
  ]);

  return (
    <section className="bg-secondary py-8">
      <ProductListWrapper products={products} categories={categories} />
    </section>
  );
};

export default ProductContainer;
