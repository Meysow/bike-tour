import { RevenueChart } from "@/components/admin/charts/revenue-chart";
import { InventoryOverview } from "@/components/admin/inventory/inventory-overview";
import { BookingStats } from "@/components/admin/stats/booking-stats";
import { CardSkeleton } from "@/components/ui/card-skeleton";
import { Suspense } from "react";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Suspense fallback={<CardSkeleton />}>
          <BookingStats />
        </Suspense>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Suspense fallback={<CardSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<CardSkeleton />}>
          <InventoryOverview />
        </Suspense>
      </div>
    </div>
  );
}
