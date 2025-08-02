import Link from "next/link";
import { PackageX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4">
      <PackageX className="w-16 h-16 text-gray-400 mb-4" />
      <h2 className="text-2xl font-semibold text-gray-800">
        Oops! This page went on a vacation 🏖️
      </h2>
      <p className="mt-2 text-gray-600 max-w-md">
        We looked everywhere — under the couch, behind the fridge, even in
        Narnia — but couldn&apos;t find anything matching your search. Maybe try
        a different filter, or summon the search gods again?
      </p>
      <Button asChild variant={"default"} size={"lg"} className="mt-8">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
