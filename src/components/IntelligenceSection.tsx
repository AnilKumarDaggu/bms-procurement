import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BarChart3, Leaf, Bot, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Live Procurement Analytics',
    description: 'Monitor spend, supplier performance, and market dynamics across 127 categories in real-time.',
    metric: '2.3 seconds',
    metricLabel: 'average query response',
    cta: 'Explore Categories',
    gradient: 'from-primary to-amgen-science',
  },
  {
    icon: Leaf,
    title: 'Scope 3 Decarbonization',
    description: 'Track 1.8M MT CO₂e emissions across value chain with AI-powered reduction pathways.',
    metric: '32%',
    metricLabel: 'progress to 2030 SBTi',
    cta: 'View Sustainability',
    gradient: 'from-forest to-ocean',
  },
  {
    icon: Bot,
    title: 'Agentic AI Co-Pilots',
    description: '4 AI agents trained on biopharmaceutical sourcing, regulatory compliance, and sustainability.',
    metric: '40%',
    metricLabel: 'faster sourcing decisions',
    cta: 'Meet Your Agents',
    gradient: 'from-amgen-innovation to-primary',
  },
];

export const IntelligenceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="bg-white" id="categories" style={{ padding: '48px 0' }}>
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
          style={{ marginBottom: '32px' }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
            Intelligence in Motion
          </span>
          <h2 className="text-foreground font-semibold" style={{ fontSize: '28px', marginBottom: '12px' }}>
            Procurement Intelligence That Moves at the Speed of Life
          </h2>
          <p className="text-muted-foreground" style={{ fontSize: '15px' }}>
            Harness AI to transform procurement with real-time insights and intelligent automation.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '20px' }}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl border border-border shadow-md hover:shadow-lg transition-all duration-300 group"
              style={{ padding: '24px' }}
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4`}>
                <feature.icon className="w-5 h-5 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-foreground font-semibold mb-2" style={{ fontSize: '16px' }}>{feature.title}</h3>
              <p className="text-muted-foreground mb-4" style={{ fontSize: '13px', lineHeight: '1.5' }}>{feature.description}</p>

              {/* Metric */}
              <div className="p-3 rounded-lg bg-secondary mb-4">
                <div className="text-xl font-bold text-primary font-mono">{feature.metric}</div>
                <div className="text-xs text-muted-foreground">{feature.metricLabel}</div>
              </div>

              {/* CTA */}
              <a
                href="#"
                className="inline-flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all text-sm"
              >
                {feature.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
