"use client";

import { useMagnetic } from "@/hooks/useMagnetic";
import { useRef } from "react";

export function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useMagnetic(ref);

  return <div ref={ref}>{children}</div>;
}
