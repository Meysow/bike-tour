"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Tour } from "@prisma/client";
import { useState } from "react";

interface DeleteTourDialogProps {
  tour: Tour | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onTourDeleted: () => void;
}

export function DeleteTourDialog({
  tour,
  open,
  onOpenChange,
  onTourDeleted,
}: DeleteTourDialogProps) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleDelete() {
    if (!tour) return;

    setIsLoading(true);
    try {
      const response = await fetch(`/api/tours/${tour.id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete tour");
      onTourDeleted();
    } catch (error) {
      console.error("Error deleting tour:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the tour
            &quot;{tour?.name}&quot; and remove it from the database.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={isLoading}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            {isLoading ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
