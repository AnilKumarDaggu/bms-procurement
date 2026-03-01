import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { IntelligenceSection } from '@/components/IntelligenceSection';
import { AIAgentsSection } from '@/components/AIAgentsSection';
import { SustainabilitySection } from '@/components/SustainabilitySection';
import { TrustSection } from '@/components/TrustSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <IntelligenceSection />
      <AIAgentsSection />
      <SustainabilitySection />
      <TrustSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
