import { ProductType } from "@/types";
import type { Metadata } from "next";

import ProductViewContainer from "./(components)/ProductViewContainer";

type Props = {
  params: Promise<{ id: string }>;
};

// get product by id
const getProductData = async (id: string): Promise<ProductType> => {
  const res = await fetch(`${process.env.API_BASE_URL}/products/${id}`, {
    cache: "force-cache",
    next: { revalidate: 60 * 60 * 24 },
  });
  if (!res.ok) throw new Error("Failed to fetch products");

  const data: ProductType = await res.json();
  return data;
};

// page
export default async function ProductViewPage({ params }: Props) {
  const { id } = await params;
  const product = await getProductData(id);

  return <ProductViewContainer product={product} />;
}

// generate Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const product = await getProductData(id);

  return {
    title: product.title + " - VervCommerce",
    description: product.description,
    keywords: ["product", "details", "product details"],
    openGraph: {
      title: product.title + " - VervCommerce",
      description: product.description,
      images: [product.image],
    },
    twitter: {
      title: product.title + " - VervCommerce",
      description: product.description,
      images: [product.image],
    },
  };
}
