"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tour } from "@prisma/client";
import { useState } from "react";
import { DeleteTourDialog } from "./delete-tour-dialog";
import { EditTourDialog } from "./edit-tour-dialog";

interface TourListProps {
  tours: Tour[];
  onTourUpdated: () => void;
}

export function TourList({ tours, onTourUpdated }: TourListProps) {
  const [editingTour, setEditingTour] = useState<Tour | null>(null);
  const [deletingTour, setDeletingTour] = useState<Tour | null>(null);

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Distance</TableHead>
            <TableHead>Difficulty</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Max People</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tours.map((tour) => (
            <TableRow key={tour.id}>
              <TableCell>{tour.name}</TableCell>
              <TableCell>{tour.duration}h</TableCell>
              <TableCell>{tour.distance}km</TableCell>
              <TableCell>{tour.difficulty}</TableCell>
              <TableCell>${Number(tour.price).toFixed(2)}</TableCell>
              <TableCell>{tour.maxPeople}</TableCell>
              <TableCell className="space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setEditingTour(tour)}
                >
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => setDeletingTour(tour)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <EditTourDialog
        tour={editingTour}
        open={!!editingTour}
        onOpenChange={(open) => !open && setEditingTour(null)}
        onTourUpdated={() => {
          onTourUpdated();
          setEditingTour(null);
        }}
      />

      <DeleteTourDialog
        tour={deletingTour}
        open={!!deletingTour}
        onOpenChange={(open) => !open && setDeletingTour(null)}
        onTourDeleted={() => {
          onTourUpdated();
          setDeletingTour(null);
        }}
      />
    </>
  );
}
