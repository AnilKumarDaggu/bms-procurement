import { cn } from '@/lib/utils';

interface RiskBadgeProps {
  level: 'low' | 'medium' | 'high';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const RiskBadge = ({ level, size = 'md', className }: RiskBadgeProps) => {
  const colors = {
    low: 'bg-success/10 text-success border-success/20',
    medium: 'bg-warning/10 text-warning border-warning/20',
    high: 'bg-destructive/10 text-destructive border-destructive/20',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  const icons = {
    low: '✓',
    medium: '⚠',
    high: '✕',
  };

  return (
    <span className={cn(
      'inline-flex items-center gap-1 rounded-full font-medium border capitalize',
      colors[level],
      sizes[size],
      className
    )}>
      <span>{icons[level]}</span>
      {level}
    </span>
  );
};
