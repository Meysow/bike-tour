"use client";

import { Skeleton } from "@/components/ui/skeleton";

export const Loader = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="flex flex-col items-center gap-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <Skeleton className="h-4 w-32" />
      </div>
    </div>
  );
};
