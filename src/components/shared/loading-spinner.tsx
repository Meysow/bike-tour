import { Skeleton } from "@/components/ui/skeleton";

export function LoadingSpinner() {
  return (
    <div className="flex h-[450px] w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Skeleton className="h-8 w-8 rounded-full" />
        <Skeleton className="h-4 w-24" />
      </div>
    </div>
  );
}
