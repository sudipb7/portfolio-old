import { cn } from '@/lib/utils';

interface BadgeProps {
  size: 'sm' | 'md' | 'lg';
  label: string;
  onClick?: () => void;
}

export const Badge = ({ size, label, onClick }: BadgeProps) => {
  const defaultStyles =
    'rounded-md border border-zinc-200 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-800 transition';

  const styles = {
    sm: 'p-1 md:p-1.5 text-[8px] md:text-[10px]',
    md: 'p-1.5 md:p-2 text-[10px] md:text-[11px]',
    lg: 'p-1.5 md:p-2.5 text-[10px] md:text-xs',
  };

  return (
    <span onClick={onClick} className={cn(defaultStyles, styles[size])}>
      {label}
    </span>
  );
};
