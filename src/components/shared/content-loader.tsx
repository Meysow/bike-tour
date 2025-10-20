import { Skeleton } from "@/components/ui/skeleton";

interface ContentLoaderProps {
  variant?: "card" | "list" | "text" | "image";
  count?: number;
}

export function ContentLoader({
  variant = "card",
  count = 1,
}: ContentLoaderProps) {
  const renderSkeleton = () => {
    switch (variant) {
      case "card":
        return (
          <div className="space-y-4">
            <Skeleton className="h-48 w-full rounded-lg" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        );

      case "list":
        return (
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
          </div>
        );

      case "text":
        return (
          <div className="space-y-2">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        );

      case "image":
        return <Skeleton className="h-64 w-full rounded-lg" />;

      default:
        return <Skeleton className="h-32 w-full" />;
    }
  };

  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>{renderSkeleton()}</div>
      ))}
    </div>
  );
}
