import { memo } from "react";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  children: React.ReactNode;
  columnSpan: number;
  className?: string;
}

const BentoCardComponent = ({ children, className, columnSpan }: BentoCardProps) => {
  const colSpanClass = `md:col-span-${columnSpan}`;

  return (
    <div
      className={cn(
        "bg-surface group row-span-1 overflow-hidden rounded-2xl border-0 shadow-[inset_0px_0px_20px_rgba(255,225,153,0.25)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[inset_0px_0px_30px_rgba(255,225,153,0.35)]",
        colSpanClass
      )}
      style={{ willChange: "transform" }}
    >
      <div className={cn("flex h-full items-center justify-center", className ?? "")}>
        {children}
      </div>
    </div>
  );
};

export const BentoCard = memo(BentoCardComponent);
