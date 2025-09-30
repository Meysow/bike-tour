"use client";

import React from "react";
import { ThemeProvider } from "./theme-provider";

import { SmoothScrollProvider } from "./smooth-scroll-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </SmoothScrollProvider>
  );
}
