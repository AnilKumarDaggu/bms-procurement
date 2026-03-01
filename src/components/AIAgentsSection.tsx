import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Atom, Stethoscope, TreeDeciduous, ShieldCheck, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const agents = [
  {
    id: 'helix',
    name: 'Helix.AI',
    specialty: 'API & Biologics',
    icon: Atom,
    color: 'from-primary to-amgen-science',
    capabilities: [
      'CMO/CDMO capacity monitoring',
      'Regulatory pathway optimization',
      'Supply chain risk sensing',
    ],
  },
  {
    id: 'medtech',
    name: 'MedTech.AI',
    specialty: 'Medical Devices',
    icon: Stethoscope,
    color: 'from-amgen-science to-amgen-innovation',
    capabilities: [
      'Device supplier qualification',
      'ISO 13485 compliance tracking',
      'Packaging innovation',
    ],
  },
  {
    id: 'ecochain',
    name: 'EcoChain.AI',
    specialty: 'Sustainability & ESG',
    icon: TreeDeciduous,
    color: 'from-forest to-ocean',
    capabilities: [
      'Carbon footprint calculations',
      'SBTi pathway modeling',
      'EUDR/CSDDD compliance',
    ],
  },
  {
    id: 'sentinel',
    name: 'Sentinel.AI',
    specialty: 'Risk & Compliance',
    icon: ShieldCheck,
    color: 'from-warning to-destructive',
    capabilities: [
      'Geopolitical risk alerts',
      'Financial health monitoring',
      'Cybersecurity assessment',
    ],
  },
];

export const AIAgentsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="bg-secondary" id="agents" style={{ padding: '48px 0' }}>
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
            Agentic AI Technology
          </span>
          <h2 className="text-foreground font-semibold" style={{ fontSize: '28px', marginBottom: '12px' }}>
            Meet Your AI Procurement Co-Pilots
          </h2>
          <p className="text-muted-foreground" style={{ fontSize: '15px' }}>
            Four specialized AI agents ready to accelerate your decision-making.
          </p>
        </motion.div>

        {/* Agent Cards Grid - 4 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '16px' }}>
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-card rounded-xl border border-border shadow-md hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
              style={{ padding: '20px' }}
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${agent.color}`} />
              
              <div className="flex items-start gap-3 mb-4">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`p-3 rounded-xl bg-gradient-to-br ${agent.color} shrink-0`}
                >
                  <agent.icon className="w-5 h-5 text-white" />
                </motion.div>

                <div>
                  <h3 className="font-semibold text-foreground" style={{ fontSize: '15px' }}>{agent.name}</h3>
                  <p className="text-muted-foreground" style={{ fontSize: '12px' }}>{agent.specialty}</p>
                </div>
              </div>

              {/* Capabilities */}
              <div className="space-y-1.5 mb-4">
                {agent.capabilities.map((capability, i) => (
                  <div key={i} className="flex items-start gap-2 text-foreground" style={{ fontSize: '12px' }}>
                    <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                    {capability}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                variant="outline"
                size="sm"
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                style={{ fontSize: '12px', padding: '8px 12px' }}
              >
                <MessageCircle className="w-3 h-3 mr-1.5" />
                Ask {agent.name.split('.')[0]}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
