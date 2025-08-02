import { Skeleton } from "@/components/ui/skeleton";
import { FaStar } from "react-icons/fa";

export default function ProductDetailsSkeleton() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6">
        <div className="w-full h-[400px] relative rounded-lg overflow-hidden">
          <Skeleton className="w-full h-full rounded-lg" />
        </div>

        {/* Details Skeleton */}
        <div className="flex flex-col justify-between space-y-4">
          <div>
            <Skeleton className="h-10 w-3/4 mb-2 rounded" /> {/* Title */}
            <Skeleton className="h-4 w-1/3 rounded" /> {/* Category */}
          </div>
          <Skeleton className="h-24 rounded" /> {/* Description */}
          <div className="flex items-center gap-4">
            <Skeleton className="h-8 w-20 rounded" /> {/* Price */}
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-500" />
              <Skeleton className="h-6 w-8 rounded" /> {/* Rating */}
            </div>
          </div>
          <Skeleton className="h-12 w-full rounded" />{" "}
        </div>
      </div>
    </div>
  );
}
