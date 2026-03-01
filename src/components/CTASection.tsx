import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="bg-secondary relative overflow-hidden" style={{ padding: '48px 0' }}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amgen-innovation/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, type: 'spring' }}
            className="inline-flex p-2 rounded-xl bg-primary/10 mb-4"
          >
            <Sparkles className="w-6 h-6 text-primary" />
          </motion.div>

          <h2 className="text-foreground font-semibold mb-3" style={{ fontSize: '28px' }}>
            Ready to Transform Your Procurement Intelligence?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto" style={{ fontSize: '15px' }}>
            Join Amgen procurement teams using AI to drive better decisions, 
            reduce risk, and accelerate sustainable growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center" style={{ gap: '12px' }}>
            <Button
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 group"
              style={{ padding: '12px 24px', fontSize: '14px' }}
            >
              Get Started Today
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="rounded-full"
              style={{ padding: '12px 24px', fontSize: '14px' }}
            >
              Schedule a Demo
            </Button>
          </div>

          {/* Trust Logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 pt-6 border-t border-border"
          >
            <p className="text-xs text-muted-foreground mb-3">
              Trusted by leading biopharmaceutical organizations worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 opacity-50">
              {['Powered by AI', 'SOC 2 Certified', 'GDPR Compliant', 'ISO 27001'].map((text) => (
                <span key={text} className="text-xs font-medium text-muted-foreground">
                  {text}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
