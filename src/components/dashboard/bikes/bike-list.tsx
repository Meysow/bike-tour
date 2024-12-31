"use client";

import { Bike } from "@prisma/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { EditBikeDialog } from "./edit-bike-dialog";
import { DeleteBikeDialog } from "./delete-bike-dialog";
import { useState } from "react";

interface BikeListProps {
  bikes: Bike[];
  onBikeUpdated: () => void;
}

export function BikeList({ bikes, onBikeUpdated }: BikeListProps) {
  const [editingBike, setEditingBike] = useState<Bike | null>(null);
  const [deletingBike, setDeletingBike] = useState<Bike | null>(null);

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bikes.map((bike) => (
            <TableRow key={bike.id}>
              <TableCell>{bike.name}</TableCell>
              <TableCell>{bike.type}</TableCell>
              <TableCell>{bike.size}</TableCell>
              <TableCell>${Number(bike.price).toFixed(2)}</TableCell>
              <TableCell>{bike.quantity}</TableCell>
              <TableCell className="space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setEditingBike(bike)}
                >
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => setDeletingBike(bike)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <EditBikeDialog
        bike={editingBike}
        open={!!editingBike}
        onOpenChange={(open) => !open && setEditingBike(null)}
        onBikeUpdated={() => {
          onBikeUpdated();
          setEditingBike(null);
        }}
      />

      <DeleteBikeDialog
        bike={deletingBike}
        open={!!deletingBike}
        onOpenChange={(open) => !open && setDeletingBike(null)}
        onBikeDeleted={() => {
          onBikeUpdated();
          setDeletingBike(null);
        }}
      />
    </>
  );
}