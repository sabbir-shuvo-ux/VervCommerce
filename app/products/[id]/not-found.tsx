import { PackageX } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4 bg-white rounded-lg border border-gray-200 shadow-sm">
      <PackageX className="w-16 h-16 text-gray-400 mb-4" />
      <h2 className="text-2xl font-semibold text-gray-800">
        No Products Found
      </h2>
      <p className="mt-2 text-gray-600 max-w-md">
        We couldn’t find any products matching your search or filters. Try
        adjusting your criteria or check back later.
      </p>
      <Link
        href="/products"
        className="mt-6 inline-block rounded-md bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 transition"
      >
        Back to Products
      </Link>
    </div>
  );
}
