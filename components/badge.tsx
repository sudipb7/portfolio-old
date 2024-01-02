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
  const styles = {
    sm: "p-1 md:p-1.5 rounded-md border text-[8px] md:text-[10px] border-[#1C1C1C] hover:bg-[#1C1C1C] cursor-pointer text-zinc-500 hover:text-zinc-400 transition-all",
    md: "p-1.5 md:p-2 rounded-md border text-[10px] md:text-[11px] border-[#1C1C1C] hover:bg-[#1C1C1C] cursor-pointer text-zinc-500 hover:text-zinc-400 transition-all",
    lg: "p-1.5 md:p-2.5 rounded-md border text-[10px] md:text-xs border-[#1C1C1C] hover:bg-[#1C1C1C] cursor-pointer text-zinc-500 hover:text-zinc-400 transition-all",
  };

  return (
    <span onClick={onClick} className={styles[size]}>
      {label}
    </span>
  );
};
