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
        className='bg-[#FBFCFD] group border-zinc-300 hover:bg-zinc-300 transition'
        asChild
      >
        {children}
      </Button>
    </ActionTooltip>
  );
};
