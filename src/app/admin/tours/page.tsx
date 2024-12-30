"use client";

import { CreateTourDialog } from "@/components/admin/tours/create-tour-dialog";
import { TourList } from "@/components/admin/tours/tour-list";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { PlusIcon } from "lucide-react";
import { useState } from "react";

export default function ToursPage() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const { data: tours, refetch } = useQuery({
    queryKey: ["tours"],
    queryFn: () => fetch("/api/tours").then((res) => res.json()),
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Tours</h1>
        <Button onClick={() => setIsCreateDialogOpen(true)}>
          <PlusIcon className="h-4 w-4 mr-2" />
          Add Tour
        </Button>
      </div>

      <TourList tours={tours || []} onTourUpdated={() => refetch()} />

      <CreateTourDialog
        open={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
        onTourCreated={() => {
          refetch();
          setIsCreateDialogOpen(false);
        }}
      />
    </div>
  );
}
