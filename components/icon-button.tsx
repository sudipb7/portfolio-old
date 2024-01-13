import { Button } from '@/components/ui/button';
import { ActionTooltip } from '@/components/action-tooltip';

interface IconButtonProps {
  label: string;
  children: React.ReactNode;
}

export const IconButton = ({ label, children }: IconButtonProps) => {
  return (
    <ActionTooltip label={label}>
      <Button
        variant='outline'
        size='icon'
        className='bg-[#FBFCFD] dark:bg-[#121212] group border-zinc-300 dark:border-[#1C1C1C] hover:bg-zinc-300 dark:hover:bg-[#1C1C1C] transition'
        asChild
      >
        {children}
      </Button>
    </ActionTooltip>
  );
};
