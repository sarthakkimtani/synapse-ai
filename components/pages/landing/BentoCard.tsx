import { cn } from "@/lib/utils";

interface BentoCardProps {
  children: React.ReactNode;
  columnSpan: number;
  className?: string;
}

export const BentoCard = ({ children, className, columnSpan }: BentoCardProps) => {
  return (
    <div
      className={cn(
        "group row-span-1 overflow-hidden rounded-2xl border-0 bg-[#1E1F1E] shadow-[inset_0px_0px_20px_rgba(255,225,153,0.25)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[inset_0px_0px_30px_rgba(255,225,153,0.35)]",
        `md:col-span-${columnSpan}`
      )}
    >
      <div className={cn("flex h-full items-center justify-center", className ?? "")}>
        {children}
      </div>
    </div>
  );
};
