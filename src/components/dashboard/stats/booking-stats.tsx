"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookingStatus } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

export function BookingStats() {
  const { data: bookings } = useQuery({
    queryKey: ["bookings"],
    queryFn: () => fetch("/api/bookings").then((res) => res.json()),
  });

  const stats = {
    total: bookings?.length || 0,
    pending:
      bookings?.filter((b: any) => b.status === BookingStatus.PENDING).length ||
      0,
    confirmed:
      bookings?.filter((b: any) => b.status === BookingStatus.CONFIRMED)
        .length || 0,
    completed:
      bookings?.filter((b: any) => b.status === BookingStatus.COMPLETED)
        .length || 0,
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Total Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{stats.total}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pending Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{stats.pending}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Active Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{stats.confirmed}</p>
        </CardContent>
      </Card>
    </>
  );
}
