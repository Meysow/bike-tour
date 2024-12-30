"use client";

import { BikeList } from "@/components/admin/bikes/bike-list";
import { CreateBikeDialog } from "@/components/admin/bikes/create-bike-dialog";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { PlusIcon } from "lucide-react";
import { useState } from "react";

export default function BikesPage() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const { data: bikes, refetch } = useQuery({
    queryKey: ["bikes"],
    queryFn: () => fetch("/api/bikes").then((res) => res.json()),
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Bikes</h1>
        <Button onClick={() => setIsCreateDialogOpen(true)}>
          <PlusIcon className="h-4 w-4 mr-2" />
          Add Bike
        </Button>
      </div>

      <BikeList bikes={bikes || []} onBikeUpdated={() => refetch()} />

      <CreateBikeDialog
        open={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
        onBikeCreated={() => {
          refetch();
          setIsCreateDialogOpen(false);
        }}
      />
    </div>
  );
}
