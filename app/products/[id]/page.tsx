import Image from "next/image";
import { ProductType } from "@/types";
import { FaStar } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import ProductViewAction from "./(components)/ProductViewAction";

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

export default async function ProductViewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductData(id);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6">
        {/* Product Image */}
        <div className="w-full h-[400px] relative rounded-lg overflow-hidden">
          <Image
            src={product?.image ? product.image : ""}
            alt={product?.title ? product.title : ""}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between space-y-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {product?.title}
            </h1>
            <p className="text-sm text-gray-500 mt-1 capitalize">
              {product?.category}
            </p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            {product?.description}
          </p>

          <div className="flex items-center gap-4">
            <span className="text-2xl font-semibold text-green-600">
              ${product?.price}
            </span>
            <span className="text-yellow-500 font-medium flex items-center gap-1">
              <FaStar /> {product?.rating.rate}/5
            </span>
          </div>

          <ProductViewAction product={product} />
        </div>
      </div>
    </div>
  );
}
