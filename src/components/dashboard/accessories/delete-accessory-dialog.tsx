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
import { Accessory } from "@prisma/client";
import { useState } from "react";

interface DeleteAccessoryDialogProps {
  accessory: Accessory | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAccessoryDeleted: () => void;
}

export function DeleteAccessoryDialog({
  accessory,
  open,
  onOpenChange,
  onAccessoryDeleted,
}: DeleteAccessoryDialogProps) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleDelete() {
    if (!accessory) return;

    setIsLoading(true);
    try {
      const response = await fetch(`/api/accessories/${accessory.id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete accessory");
      onAccessoryDeleted();
    } catch (error) {
      console.error("Error deleting accessory:", error);
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
            This action cannot be undone. This will permanently delete the
            accessory &quot;{accessory?.name}&quot; and remove it from the
            database.
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
