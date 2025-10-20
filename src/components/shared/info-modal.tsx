"use client";

import { Icons } from "@/components/shared/icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

interface InfoModalProps {
  title: string;
  description?: string;
  content: React.ReactNode;
  trigger?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
}

export function InfoModal({
  title,
  description,
  content,
  trigger,
  size = "md",
}: InfoModalProps) {
  const [open, setOpen] = useState(false);

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" size="sm">
            <Icons.info className="h-4 w-4 mr-2" />
            More Info
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className={sizeClasses[size]}>
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>

        <div className="space-y-4">
          {content}

          <div className="flex justify-end">
            <Button onClick={() => setOpen(false)} variant="outline">
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
