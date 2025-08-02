import { Button } from "@/components/ui/button";
import { PackageX } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4">
      <PackageX className="w-16 h-16 text-gray-400 mb-4" />
      <h2 className="text-2xl font-semibold text-gray-800">
        No Products Found
      </h2>
      <p className="mt-2 text-gray-600 max-w-md">
        We couldn&apos;t find any products matching your search or filters. Try
        adjusting your criteria or check back later.
      </p>
      <Button asChild variant={"default"} size={"lg"} className="mt-8">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
