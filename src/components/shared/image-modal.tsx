"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";

interface ImageModalProps {
  src: string;
  alt: string;
  children: React.ReactNode;
  className?: string;
}

export function ImageModal({
  src,
  alt,
  children,
  className = "",
}: ImageModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl p-0">
        <div className="relative">
          <Image
            src={src}
            alt={alt}
            width={800}
            height={600}
            className={`w-full h-auto max-h-[80vh] object-contain ${className}`}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
