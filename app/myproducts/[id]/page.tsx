import type { Metadata } from "next";

import ProductViewContainer from "./(components)/ProductViewContainer";

type Props = {
  params: Promise<{ id: string }>;
};

export const metadata: Metadata = {
  title: "Product View Page - VervCommerce",
  description: "Product View Page - VervCommerce",
};

// page
export default async function ProductViewPage({ params }: Props) {
  const { id } = await params;

  return <ProductViewContainer id={id} />;
}
