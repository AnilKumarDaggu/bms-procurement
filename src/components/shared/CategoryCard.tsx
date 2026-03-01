import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, TrendingDown, Users, FileText, Leaf, Clock } from 'lucide-react';
import { Category, formatCurrency, formatPercent, getRiskColor } from '@/data/mockData';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

interface CategoryCardProps {
  category: Category;
  index?: number;
}

export const CategoryCard = ({ category, index = 0 }: CategoryCardProps) => {
  const navigate = useNavigate();
  
  const TrendIcon = category.spendYoYChange >= 0 ? TrendingUp : TrendingDown;
  
  // Mini sparkline data (mock)
  const sparklineData = [40, 55, 45, 60, 50, 70, 65, 80, 75, 85, 90, 88];

  const handleViewDetails = () => {
    navigate(`/categories/${category.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-card rounded-2xl border border-border overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-500"
      onClick={handleViewDetails}
    >
      {/* Header with gradient */}
      <div className={cn('p-5 bg-gradient-to-r', category.gradient)}>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{category.icon}</span>
            <div>
              <h3 className="font-semibold text-white text-lg leading-tight">
                {category.shortName}
              </h3>
              <p className="text-white/80 text-xs mt-0.5">{category.name}</p>
            </div>
          </div>
          <span className={cn(
            'px-3 py-1 rounded-full text-xs font-medium capitalize',
            category.riskLevel === 'low' ? 'bg-white/20 text-white' :
            category.riskLevel === 'medium' ? 'bg-warning/80 text-white' :
            'bg-destructive/80 text-white'
          )}>
            {category.riskLevel} risk
          </span>
        </div>
      </div>

      {/* Sparkline */}
      <div className="px-5 pt-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs text-muted-foreground">12-month trend</span>
          <TrendIcon className={cn(
            'w-3 h-3',
            category.spendYoYChange >= 0 ? 'text-success' : 'text-destructive'
          )} />
        </div>
        <svg viewBox="0 0 100 24" className="w-full h-6">
          <polyline
            fill="none"
            stroke="url(#sparkline-gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={sparklineData.map((v, i) => `${(i / 11) * 100},${24 - (v / 100) * 24}`).join(' ')}
          />
          <defs>
            <linearGradient id="sparkline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(var(--primary))" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Key Metrics Grid */}
      <div className="p-5 pt-3">
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-secondary/50 rounded-xl p-3">
            <div className="text-lg font-bold font-mono text-foreground">
              {formatCurrency(category.spend, true)}
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <span>Spend</span>
              <span className={cn(
                'font-medium',
                category.spendYoYChange >= 0 ? 'text-success' : 'text-destructive'
              )}>
                {formatPercent(category.spendYoYChange, true)}
              </span>
            </div>
          </div>
          <div className="bg-secondary/50 rounded-xl p-3">
            <div className="text-lg font-bold font-mono text-foreground flex items-center gap-1">
              <Users className="w-4 h-4 text-muted-foreground" />
              {category.suppliers}
            </div>
            <div className="text-xs text-muted-foreground">Suppliers</div>
          </div>
          <div className="bg-secondary/50 rounded-xl p-3">
            <div className="text-lg font-bold font-mono text-foreground flex items-center gap-1">
              <FileText className="w-4 h-4 text-muted-foreground" />
              {category.contracts}
            </div>
            <div className="text-xs text-muted-foreground">
              {category.contractsExpiring} expiring
            </div>
          </div>
          <div className="bg-secondary/50 rounded-xl p-3">
            <div className="text-lg font-bold font-mono text-success">
              {formatPercent(category.savings)}
            </div>
            <div className="text-xs text-muted-foreground">Savings</div>
          </div>
        </div>

        {/* Secondary Metrics */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm border-t border-border pt-4 mb-4">
          <div className="flex items-center gap-2">
            <Leaf className="w-4 h-4 text-forest" />
            <span className="text-muted-foreground">Carbon:</span>
            <span className="font-medium">{category.carbonIntensity} {category.carbonUnit.split('/')[0]}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Lead:</span>
            <span className="font-medium">{category.leadTime.split(' ')[0]}</span>
          </div>
        </div>

        {/* Top 3 Suppliers */}
        <div className="mb-4">
          <h4 className="text-xs font-medium text-muted-foreground mb-2">Top Suppliers</h4>
          <div className="space-y-1.5">
            {category.topSuppliers.slice(0, 3).map((supplier, i) => (
              <div key={supplier.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">{i + 1}.</span>
                  <span className="font-medium truncate max-w-[120px]">{supplier.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    {((supplier.spend / category.spend) * 100).toFixed(0)}%
                  </span>
                  <span className={cn(
                    'text-xs px-1.5 py-0.5 rounded',
                    getRiskColor(supplier.riskLevel)
                  )}>
                    {supplier.qualityScore.toFixed(0)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Agent & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <span className="text-xl">{category.aiAgent.avatar}</span>
            <div>
              <div className="text-xs font-medium">{category.aiAgent.name}</div>
              <div className="text-xs text-muted-foreground">{category.aiAgent.specialty}</div>
            </div>
          </div>
          <button 
            className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all"
            onClick={(e) => {
              e.stopPropagation();
              handleViewDetails();
            }}
          >
            Details <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
