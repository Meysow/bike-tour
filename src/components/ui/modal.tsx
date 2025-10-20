"use client";

import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { type Accessories } from "@/types";

interface ModalProps {
  feature: Accessories;
  children: React.ReactNode;
}

export function Modal({ feature, children }: ModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            {feature.title}
          </DialogTitle>
          <DialogDescription className="text-gray-700">
            {feature.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Image
            src={feature.image}
            alt={feature.title}
            width={400}
            height={300}
            className="w-full h-48 object-cover rounded-lg"
          />

          <div className="flex justify-end">
            <Button onClick={() => setOpen(false)} className="w-full sm:w-auto">
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
