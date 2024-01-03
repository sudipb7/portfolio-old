import { cn } from "@/lib/utils";

interface BadgeProps {
  size: "sm" | "md" | "lg";
  label: string;
  onClick?: () => void;
}

export const Badge = ({
  size,
  label,
  onClick,
}: BadgeProps) => {
  const defaultStyles = "rounded-md border border-zinc-200 dark:border-[#1C1C1C] hover:bg-zinc-200 dark:hover:bg-[#1C1C1C] text-zinc-600 dark:text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-400 transition";

  const styles = {
    sm: "p-1 md:p-1.5 text-[8px] md:text-[10px]",
    md: "p-1.5 md:p-2 text-[10px] md:text-[11px]",
    lg: "p-1.5 md:p-2.5 text-[10px] md:text-xs",
  };

  return (
    <span onClick={onClick} className={cn(defaultStyles, styles[size])}>
      {label}
    </span>
  );
};
