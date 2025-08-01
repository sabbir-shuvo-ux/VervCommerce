import type { ProductType } from "@/types";
import ProductCard from "./ProductCard";

const ProductList = ({ products }: { products: ProductType[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {products.map((product: ProductType) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
