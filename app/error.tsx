"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold text-red-600">
            Something went wrong
          </h1>
          <p className="mt-4 text-gray-700">{error.message}</p>
          <div className="flex items-center justify-center gap-4">
            <Button
              variant={"default"}
              size={"lg"}
              onClick={() => reset()}
              className="mt-6 rounded px-6 py-2"
            >
              Try Again
            </Button>

            <Button
              variant={"default"}
              size={"lg"}
              className="mt-6 rounded px-6 py-2"
            >
              <Link href="/">Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
