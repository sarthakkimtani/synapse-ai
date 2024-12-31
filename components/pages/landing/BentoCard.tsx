import { cn } from "@/utils/cn";

interface BentoCardProps {
  children: React.ReactNode;
  columnSpan: number;
  className?: string;
}

export const BentoCard = ({ children, className, columnSpan }: BentoCardProps) => {
  return (
    <div
      className={cn(
        "row-span-1 border-0 overflow-hidden group rounded-2xl transition-all duration-500 hover:-translate-y-1 bg-[#1E1F1E] shadow-[inset_0px_0px_20px_rgba(255,225,153,0.25)] hover:shadow-[inset_0px_0px_30px_rgba(255,225,153,0.35)]",
        `md:col-span-${columnSpan}`
      )}
    >
      <div className={cn("flex h-full justify-center items-center", className ?? "")}>
        {children}
      </div>
    </div>
  );
};
