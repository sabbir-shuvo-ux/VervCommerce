import { Skeleton } from "@/components/ui/skeleton";

export const ProductListCardSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 container px-4 mx-auto mt-10">
      {Array.from({ length: 8 }).map((_, index) => (
        <Skeleton key={index} className="w-full h-[403px] rounded-lg" />
      ))}
    </div>
  );
};

export const FilterBarSkeleton = () => {
  return (
    <div className="flex items-center gap-4 pt-8 mb-8 container px-4 mx-auto">
      <div className="flex flex-col gap-2">
        <Skeleton className="w-[200px] h-[28px]" />
        <Skeleton className="w-[200px] h-[36px]" />
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="w-[200px] h-[28px]" />
        <Skeleton className="w-[200px] h-[36px]" />
      </div>
    </div>
  );
};

export const FullProductListSkeleton = () => {
  return (
    <>
      <FilterBarSkeleton />
      <ProductListCardSkeleton />
    </>
  );
};
