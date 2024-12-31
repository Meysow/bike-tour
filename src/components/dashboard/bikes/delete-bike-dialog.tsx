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
import { Bike } from "@prisma/client";
import { useState } from "react";

interface DeleteBikeDialogProps {
  bike: Bike | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onBikeDeleted: () => void;
}

export function DeleteBikeDialog({
  bike,
  open,
  onOpenChange,
  onBikeDeleted,
}: DeleteBikeDialogProps) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleDelete() {
    if (!bike) return;

    setIsLoading(true);
    try {
      const response = await fetch(`/api/bikes/${bike.id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete bike");
      onBikeDeleted();
    } catch (error) {
      console.error("Error deleting bike:", error);
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
            This action cannot be undone. This will permanently delete the bike
            &quot;{bike?.name}&quot; and remove it from the database.
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
