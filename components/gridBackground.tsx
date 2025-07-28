import { cn } from "@/lib/utils";
import React from "react";

export default function GridBackground() {
  return (
    <div className="fixed h-[50rem] inset-0 min-h-screen w-full items-center justify-center bg-transparent">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",

          "[background-image:linear-gradient(to_right,#60A5FA40_1px,transparent_1px),linear-gradient(to_bottom,#60A5FA40_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
}
