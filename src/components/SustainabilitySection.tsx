import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingDown, Users, BadgeCheck, TreePine, ArrowRight } from 'lucide-react';

const metrics = [
  {
    icon: TrendingDown,
    value: '1.85M',
    unit: 'MT CO₂e',
    label: 'Scope 3 Emissions',
    trend: '-8.2% vs last year',
    status: 'On Track',
    statusColor: 'bg-success',
  },
  {
    icon: Users,
    value: '58%',
    unit: '',
    label: 'Supplier SBTi Commitments',
    trend: '+12% vs last year',
    status: 'Attention Needed',
    statusColor: 'bg-warning',
  },
  {
    icon: BadgeCheck,
    value: '$5.4B',
    unit: '',
    label: 'Certified Sustainable Spend',
    trend: '+$890M YoY',
    status: 'Exceeds Target',
    statusColor: 'bg-success',
  },
  {
    icon: TreePine,
    value: '94%',
    unit: '',
    label: 'Deforestation-Free Volume',
    trend: 'Target: 100% by 2025',
    status: 'Near Target',
    statusColor: 'bg-warning',
  },
];

export const SustainabilitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-white" id="sustainability">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-forest/10 text-forest text-sm font-medium mb-4">
              Sustainability Command Center
            </span>
            <h2 className="text-heading-1 text-foreground mb-4">
              Driving Net-Zero Across Your Supply Chain
            </h2>
            <p className="text-body-lg text-muted-foreground mb-8">
              Track 1.8M MT CO₂e emissions across Scope 3 with AI-powered 
              decarbonization pathways. We're committed to a 50% reduction 
              by 2030 and net-zero by 2045.
            </p>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-foreground">2030 SBTi Target Progress</span>
                <span className="text-forest font-mono">32%</span>
              </div>
              <div className="h-3 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '32%' } : {}}
                  transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-forest to-ocean rounded-full"
                />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>Current: 1.85M MT</span>
                <span>Target: 940K MT</span>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              Explore Sustainability Dashboard
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Right - Metrics Grid */}
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="card-feature !p-6 group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <metric.icon className="w-5 h-5 text-forest" />
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium text-white ${metric.statusColor}`}>
                    {metric.status}
                  </span>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground font-mono mb-1">
                  {metric.value}
                  <span className="text-base font-normal text-muted-foreground ml-1">
                    {metric.unit}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground mb-2">{metric.label}</div>
                <div className="text-xs text-forest font-medium">{metric.trend}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
