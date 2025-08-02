import type { ProductType } from "@/types";
import ProductCard from "./ProductCard";

const ProductList = ({ products }: { products: ProductType[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 container px-4 mx-auto">
      {products.map((product: ProductType, index: number) => (
        <ProductCard
          key={product.id + product.category + index}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductList;
