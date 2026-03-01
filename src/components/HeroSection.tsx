import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, ArrowRight, TrendingUp, Users, Leaf, Volume2, VolumeX } from 'lucide-react';

const metrics = [
  { value: 2847, suffix: '', label: 'Active Suppliers', icon: Users },
  { value: 12.3, suffix: 'B', prefix: '$', label: 'Annual Spend', icon: TrendingUp },
  { value: 89, suffix: '%', label: 'Sustainability', icon: Leaf },
];

const Counter = ({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  const displayValue = Number.isInteger(value) ? Math.floor(count) : count.toFixed(1);

  return (
    <span className="font-mono">
      {prefix}{displayValue}{suffix}
    </span>
  );
};

// 3D DNA Helix Animation Component (Background)
const DNABackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {/* Left DNA Helix */}
      <motion.div
        className="absolute"
        style={{ left: '-2%', top: '5%', width: '160px', height: '90%', opacity: 0.18 }}
        animate={{ rotateY: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 100 400" className="w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => {
            const y = i * 20;
            const phase = i * 0.3;
            const x1 = 30 + Math.sin(phase) * 20;
            const x2 = 70 + Math.sin(phase + Math.PI) * 20;
            return (
              <g key={i}>
                <circle cx={x1} cy={y} r="4" fill="rgba(255,255,255,0.6)" />
                <circle cx={x2} cy={y} r="4" fill="rgba(74,144,226,0.6)" />
                <line x1={x1} y1={y} x2={x2} y2={y} stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
              </g>
            );
          })}
        </svg>
      </motion.div>

      {/* Center DNA Helix - positioned behind content */}
      <motion.div
        className="absolute"
        style={{ left: '35%', top: '0%', width: '200px', height: '100%', opacity: 0.08 }}
        animate={{ rotateY: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 100 500" className="w-full h-full">
          {Array.from({ length: 28 }).map((_, i) => {
            const y = i * 18;
            const phase = i * 0.28;
            const x1 = 30 + Math.sin(phase) * 25;
            const x2 = 70 + Math.sin(phase + Math.PI) * 25;
            return (
              <g key={i}>
                <circle cx={x1} cy={y} r="5" fill="rgba(255,255,255,0.5)" />
                <circle cx={x2} cy={y} r="5" fill="rgba(74,144,226,0.5)" />
                <line x1={x1} y1={y} x2={x2} y2={y} stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
              </g>
            );
          })}
        </svg>
      </motion.div>

      {/* Center-Right DNA Helix */}
      <motion.div
        className="absolute"
        style={{ left: '55%', top: '8%', width: '140px', height: '85%', opacity: 0.06 }}
        animate={{ rotateY: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 100 400" className="w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => {
            const y = i * 20;
            const phase = i * 0.32;
            const x1 = 30 + Math.sin(phase) * 22;
            const x2 = 70 + Math.sin(phase + Math.PI) * 22;
            return (
              <g key={i}>
                <circle cx={x1} cy={y} r="4" fill="rgba(255,255,255,0.4)" />
                <circle cx={x2} cy={y} r="4" fill="rgba(0,158,200,0.4)" />
                <line x1={x1} y1={y} x2={x2} y2={y} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              </g>
            );
          })}
        </svg>
      </motion.div>

      {/* Right DNA Helix */}
      <motion.div
        className="absolute"
        style={{ right: '-2%', top: '3%', width: '160px', height: '95%', opacity: 0.15 }}
        animate={{ rotateY: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 100 400" className="w-full h-full">
          {Array.from({ length: 22 }).map((_, i) => {
            const y = i * 18;
            const phase = i * 0.35;
            const x1 = 30 + Math.sin(phase) * 25;
            const x2 = 70 + Math.sin(phase + Math.PI) * 25;
            return (
              <g key={i}>
                <circle cx={x1} cy={y} r="5" fill="rgba(255,255,255,0.5)" />
                <circle cx={x2} cy={y} r="5" fill="rgba(0,158,200,0.5)" />
                <line x1={x1} y1={y} x2={x2} y2={y} stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
              </g>
            );
          })}
        </svg>
      </motion.div>

      {/* Floating particles spread across */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `rgba(255,255,255,${Math.random() * 0.15 + 0.05})`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

// Video Player Component with Custom Controls
const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Autoplay prevented:', err);
      });
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, x: 50 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      className="relative w-full h-full flex items-center justify-center"
    >
      <div 
        className="relative w-full overflow-hidden"
        style={{ 
          maxWidth: '640px',
          width: '100%',
          aspectRatio: '16/9',
          borderRadius: '12px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
        }}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/videos/dna-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Custom Video Controls */}
        <div 
          className="absolute flex items-center"
          style={{ bottom: '12px', right: '12px', gap: '10px', zIndex: 10 }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleMute}
            className="flex items-center justify-center text-white transition-colors"
            style={{ 
              width: '36px', 
              height: '36px', 
              borderRadius: '50%', 
              background: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(10px)'
            }}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={togglePlay}
            className="flex items-center justify-center text-white transition-colors"
            style={{ 
              width: '36px', 
              height: '36px', 
              borderRadius: '50%', 
              background: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(10px)'
            }}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative flex items-center overflow-hidden"
      style={{ height: '100vh', minHeight: '700px' }}
    >
      {/* Deep Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-amgen-science to-[#003052]" style={{ zIndex: 0 }} />
      
      {/* Radial glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_30%_50%,rgba(74,144,226,0.25),transparent)]" style={{ zIndex: 0 }} />

      {/* 3D DNA Background Animation */}
      <DNABackground />

      {/* Content - 2 Column Grid */}
      <div 
        className="relative container mx-auto w-full"
        style={{ zIndex: 10, padding: '72px 60px 30px' }}
      >
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 items-center w-full"
          style={{ gap: '24px', minHeight: 'calc(100vh - 140px)' }}
        >
          
          {/* Left Column - Content */}
          <div 
            className="flex flex-col justify-center text-left"
            style={{ maxWidth: '580px', gap: '18px' }}
          >
            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white/95 text-xs font-medium shadow-lg">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
                AI-Powered Procurement
              </span>
            </motion.div>

            {/* Main Headline - Reduced size */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white font-bold"
              style={{ fontSize: '40px', lineHeight: '1.15' }}
            >
              Agentic AI Procurement{' '}
              <span className="block mt-1">Solutions for{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                    Life-Changing
                  </span>
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-1.5 bg-white/20 -rotate-1 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                  />
                </span>
              </span>
              <span className="block mt-1">Medicine</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-blue-100/90"
              style={{ fontSize: '15px', lineHeight: '1.5', maxWidth: '500px' }}
            >
              AI-powered insights across $12B+ global supply chain operations, 
              driving sustainable growth and operational excellence.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start"
              style={{ gap: '12px' }}
            >
              <button className="btn-hero-primary group" style={{ padding: '12px 24px', fontSize: '14px' }}>
                Explore Intelligence
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-hero-secondary group" style={{ padding: '12px 24px', fontSize: '14px' }}>
                <Play className="mr-2 w-4 h-4" />
                Watch Demo
              </button>
            </motion.div>

            {/* Metrics Pills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap"
              style={{ gap: '10px' }}
            >
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.15 }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                  className="glass rounded-full text-center cursor-default transition-all duration-300"
                  style={{ padding: '8px 14px', minWidth: '100px' }}
                >
                  <div className="flex items-center justify-center gap-1.5">
                    <metric.icon className="w-3.5 h-3.5 text-blue-200" />
                    <span className="text-base font-bold text-white">
                      <Counter value={metric.value} suffix={metric.suffix} prefix={metric.prefix} />
                    </span>
                  </div>
                  <p className="text-[10px] text-blue-200 font-medium">{metric.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Video Player (Centered) */}
          <div 
            className="hidden lg:flex items-center justify-center h-full"
          >
            <VideoPlayer />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute left-1/2 -translate-x-1/2 z-20"
        style={{ bottom: '16px' }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-white/40 flex items-start justify-center p-1 backdrop-blur-sm"
        >
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2.5 rounded-full bg-white/80"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
