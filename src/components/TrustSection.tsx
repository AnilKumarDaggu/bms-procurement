import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lock, Target, Shield, CheckCircle2 } from 'lucide-react';

const trustItems = [
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II, ISO 27001, GDPR compliant infrastructure.',
    badges: ['SOC 2', 'ISO 27001', 'GDPR'],
  },
  {
    icon: Target,
    title: 'Audit-Ready',
    description: 'Complete decision lineage with explainable AI outputs.',
    badges: ['Explainable AI', 'Audit Trail'],
  },
  {
    icon: Shield,
    title: 'Data Sovereignty',
    description: 'On-premise or private cloud deployment options.',
    badges: ['Private Cloud', 'On-Premise'],
  },
];

export const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="bg-primary relative overflow-hidden" style={{ padding: '48px 0' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
          style={{ marginBottom: '32px' }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium mb-3">
            Enterprise-Grade Security
          </span>
          <h2 className="text-white font-semibold" style={{ fontSize: '28px', marginBottom: '12px' }}>
            Built for the World's Most Demanding Organizations
          </h2>
          <p className="text-white/70" style={{ fontSize: '15px' }}>
            Security, compliance, and governance embedded into every layer.
          </p>
        </motion.div>

        {/* Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '20px' }}>
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-xl text-center group hover:bg-white/20 transition-all duration-300"
              style={{ padding: '24px' }}
            >
              {/* Icon */}
              <div className="inline-flex p-3 rounded-xl bg-white/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-white font-semibold mb-2" style={{ fontSize: '16px' }}>{item.title}</h3>
              <p className="text-white/70 mb-4" style={{ fontSize: '13px' }}>{item.description}</p>

              {/* Badges */}
              <div className="flex flex-wrap justify-center" style={{ gap: '6px' }}>
                {item.badges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 text-white"
                    style={{ fontSize: '11px' }}
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
