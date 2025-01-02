"use client";

import { Accessory } from "@prisma/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { EditAccessoryDialog } from "./edit-accessory-dialog";
import { DeleteAccessoryDialog } from "./delete-accessory-dialog";
import { useState } from "react";

interface AccessoryListProps {
  accessories: Accessory[];
  onAccessoryUpdated: () => void;
}

export function AccessoryList({ accessories, onAccessoryUpdated }: AccessoryListProps) {
  const [editingAccessory, setEditingAccessory] = useState<Accessory | null>(null);
  const [deletingAccessory, setDeletingAccessory] = useState<Accessory | null>(null);

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {accessories.map((accessory) => (
            <TableRow key={accessory.id}>
              <TableCell>{accessory.name}</TableCell>
              <TableCell>{accessory.type}</TableCell>
              <TableCell>${Number(accessory.price).toFixed(2)}</TableCell>
              <TableCell>{accessory.quantity}</TableCell>
              <TableCell className="space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setEditingAccessory(accessory)}
                >
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => setDeletingAccessory(accessory)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <EditAccessoryDialog
        accessory={editingAccessory}
        open={!!editingAccessory}
        onOpenChange={(open) => !open && setEditingAccessory(null)}
        onAccessoryUpdated={() => {
          onAccessoryUpdated();
          setEditingAccessory(null);
        }}
      />

      <DeleteAccessoryDialog
        accessory={deletingAccessory}
        open={!!deletingAccessory}
        onOpenChange={(open) => !open && setDeletingAccessory(null)}
        onAccessoryDeleted={() => {
          onAccessoryUpdated();
          setDeletingAccessory(null);
        }}
      />
    </>
  );
}