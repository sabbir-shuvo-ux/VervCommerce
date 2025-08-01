"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
          <div className="text-center max-w-md">
            <h1 className="text-4xl font-bold text-red-600">
              Something went wrong
            </h1>
            <p className="mt-4 text-gray-700">{error.message}</p>
            <Button
              variant={"default"}
              size={"lg"}
              onClick={() => reset()}
              className="mt-6 rounded px-6 py-2"
            >
              Try Again
            </Button>
            <span className="mt-6 block">OR</span>
            <Button
              variant={"default"}
              size={"lg"}
              className="mt-6 rounded px-6 py-2"
            >
              <Link href="/">Home</Link>
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
