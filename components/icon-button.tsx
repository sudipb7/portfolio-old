import { Button } from "@/components/ui/button";
import { ActionTooltip } from "@/components/action-tooltip"

interface IconButtonProps {
  label: string;
  children: React.ReactNode;
}

export const IconButton = ({
  label,
  children,
}: IconButtonProps) => {
  return (
    <ActionTooltip label={label}>
      <Button
        variant="outline"
        size="icon"
        className="dark:bg-[#121212] group p-2.5 rounded-md border border-[#1C1C1C] hover:bg-[#1C1C1C] cursor-pointer transition"
        asChild
      >
        {children}
      </Button>
    </ActionTooltip>
  );
};
