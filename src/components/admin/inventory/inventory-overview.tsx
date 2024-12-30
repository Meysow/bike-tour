"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accessory, Bike, Tour } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

export function InventoryOverview() {
  const { data: bikes } = useQuery<Bike[]>({
    queryKey: ["bikes"],
    queryFn: () => fetch("/api/bikes").then((res) => res.json()),
  });

  const { data: accessories } = useQuery<Accessory[]>({
    queryKey: ["accessories"],
    queryFn: () => fetch("/api/accessories").then((res) => res.json()),
  });

  const { data: tours } = useQuery<Tour[]>({
    queryKey: ["tours"],
    queryFn: () => fetch("/api/tours").then((res) => res.json()),
  });

  const totalBikes = bikes?.reduce((acc, bike) => acc + bike.quantity, 0) || 0;
  const totalAccessories =
    accessories?.reduce((acc, acc2) => acc + acc2.quantity, 0) || 0;
  const totalTours = tours?.length || 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Inventory Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Total Bikes:</span>
            <span className="font-semibold">{totalBikes}</span>
          </div>
          <div className="flex justify-between">
            <span>Total Accessories:</span>
            <span className="font-semibold">{totalAccessories}</span>
          </div>
          <div className="flex justify-between">
            <span>Available Tours:</span>
            <span className="font-semibold">{totalTours}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
