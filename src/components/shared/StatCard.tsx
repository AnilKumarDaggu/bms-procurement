import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StatCardProps {
  label: string;
  value: string | number;
  subValue?: string;
  icon?: string;
  trend?: {
    value: number;
    label?: string;
  };
  variant?: 'default' | 'outline' | 'filled';
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'forest';
  className?: string;
}

export const StatCard = ({
  label,
  value,
  subValue,
  icon,
  trend,
  variant = 'default',
  color = 'primary',
  className,
}: StatCardProps) => {
  const colorClasses = {
    primary: 'text-primary',
    success: 'text-success',
    warning: 'text-warning',
    danger: 'text-destructive',
    forest: 'text-forest',
  };

  const bgClasses = {
    primary: 'bg-primary/10',
    success: 'bg-success/10',
    warning: 'bg-warning/10',
    danger: 'bg-destructive/10',
    forest: 'bg-forest/10',
  };

  const variants = {
    default: 'bg-card border border-border',
    outline: 'bg-transparent border-2 border-border',
    filled: cn(bgClasses[color], 'border border-transparent'),
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className={cn(
        'rounded-2xl p-5 transition-all duration-300',
        variants[variant],
        className
      )}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-sm font-medium text-muted-foreground">{label}</span>
        {icon && <span className="text-xl">{icon}</span>}
      </div>
      
      <div className={cn('text-3xl font-bold font-mono tracking-tight', colorClasses[color])}>
        {value}
      </div>
      
      {(subValue || trend) && (
        <div className="flex items-center gap-2 mt-2">
          {trend && (
            <span className={cn(
              'text-sm font-medium',
              trend.value > 0 ? 'text-success' : trend.value < 0 ? 'text-destructive' : 'text-muted-foreground'
            )}>
              {trend.value > 0 ? '↑' : trend.value < 0 ? '↓' : '→'} {Math.abs(trend.value).toFixed(1)}%
              {trend.label && <span className="text-muted-foreground ml-1">{trend.label}</span>}
            </span>
          )}
          {subValue && (
            <span className="text-sm text-muted-foreground">{subValue}</span>
          )}
        </div>
      )}
    </motion.div>
  );
};
