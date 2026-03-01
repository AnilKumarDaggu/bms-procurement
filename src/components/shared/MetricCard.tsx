import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: number;
  trendLabel?: string;
  icon?: LucideIcon;
  iconEmoji?: string;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export const MetricCard = ({
  title,
  value,
  subtitle,
  trend,
  trendLabel,
  icon: Icon,
  iconEmoji,
  variant = 'default',
  size = 'md',
  className,
  onClick,
}: MetricCardProps) => {
  const variants = {
    default: 'bg-card border border-border',
    primary: 'bg-primary text-primary-foreground',
    success: 'bg-success/10 border border-success/20',
    warning: 'bg-warning/10 border border-warning/20',
    glass: 'glass',
  };

  const sizes = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const valueSize = {
    sm: 'text-2xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-4xl md:text-5xl',
  };

  const getTrendIcon = () => {
    if (trend === undefined) return null;
    if (trend > 0) return '↑';
    if (trend < 0) return '↓';
    return '→';
  };

  const getTrendColor = () => {
    if (trend === undefined) return '';
    if (variant === 'primary') return trend > 0 ? 'text-green-200' : 'text-red-200';
    return trend > 0 ? 'text-success' : trend < 0 ? 'text-destructive' : 'text-muted-foreground';
  };

  return (
    <motion.div
      whileHover={onClick ? { scale: 1.02, y: -4 } : undefined}
      className={cn(
        'rounded-2xl transition-all duration-300 cursor-default',
        variants[variant],
        sizes[size],
        onClick && 'cursor-pointer hover:shadow-lg',
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-2">
        <span className={cn(
          'text-sm font-medium',
          variant === 'primary' ? 'text-primary-foreground/80' : 'text-muted-foreground'
        )}>
          {title}
        </span>
        {(Icon || iconEmoji) && (
          <div className={cn(
            'p-2 rounded-xl',
            variant === 'primary' ? 'bg-white/10' : 'bg-secondary'
          )}>
            {iconEmoji ? (
              <span className="text-lg">{iconEmoji}</span>
            ) : Icon ? (
              <Icon className="w-5 h-5" />
            ) : null}
          </div>
        )}
      </div>

      <div className={cn('font-bold font-mono tracking-tight', valueSize[size])}>
        {value}
      </div>

      {(trend !== undefined || subtitle) && (
        <div className="flex items-center gap-2 mt-2">
          {trend !== undefined && (
            <span className={cn('text-sm font-medium flex items-center gap-1', getTrendColor())}>
              {getTrendIcon()} {Math.abs(trend * 100).toFixed(1)}%
              {trendLabel && <span className="text-muted-foreground ml-1">{trendLabel}</span>}
            </span>
          )}
          {subtitle && (
            <span className={cn(
              'text-sm',
              variant === 'primary' ? 'text-primary-foreground/70' : 'text-muted-foreground'
            )}>
              {subtitle}
            </span>
          )}
        </div>
      )}
    </motion.div>
  );
};
