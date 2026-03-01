import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Bell, Menu, X, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import amgenLogo from '@/assets/amgen-logo.png';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Categories', href: '/categories' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Knowledge', href: '#knowledge' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Pages that need dark header (white background with dark text)
  const isDarkHeaderPage = ['/categories', '/sustainability', '/knowledge'].some(
    path => location.pathname.startsWith(path)
  );

  // Force dark header when scrolled OR on specific pages
  const showDarkHeader = isScrolled || isDarkHeaderPage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        showDarkHeader 
          ? 'bg-white/98 backdrop-blur-xl shadow-[0_2px_8px_rgba(0,0,0,0.1)] border-b border-border' 
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto" style={{ padding: '0 20px' }}>
        {/* Header height: 72px (original) */}
        <div className="flex items-center justify-between" style={{ height: '72px' }}>
          {/* Left Section - Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              {/* Amgen Logo */}
              <div 
                className="flex items-center justify-center"
                style={{ height: '36px' }}
              >
                <img
                  src={amgenLogo}
                  alt="Amgen"
                  className={cn(
                    'h-full w-auto object-contain transition-all duration-300',
                    showDarkHeader ? '' : 'brightness-0 invert'
                  )}
                  style={{ maxWidth: '120px' }}
                />
              </div>
              
              {/* Divider: 30px height, 1px width, 16px margin */}
              <div 
                className={cn(
                  'hidden md:block transition-colors duration-300',
                  showDarkHeader ? 'bg-border' : 'bg-white/30'
                )}
                style={{ height: '30px', width: '1px', margin: '0 16px' }}
              />
              
              {/* Text: 16px font */}
              <span 
                className={cn(
                  'hidden md:block font-medium transition-colors duration-300',
                  showDarkHeader ? 'text-foreground' : 'text-white'
                )}
                style={{ fontSize: '16px' }}
              >
                Global Procurement Organization
              </span>
            </Link>
          </div>

          {/* Center - Navigation (Desktop) */}
          {/* Nav links: 15px font, 40px spacing */}
          <nav className="hidden lg:flex items-center" style={{ gap: '40px' }}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={cn(
                  'relative font-medium transition-colors duration-300 group',
                  showDarkHeader 
                    ? isActive(item.href) ? 'text-primary' : 'text-foreground hover:text-primary'
                    : isActive(item.href) ? 'text-white' : 'text-white/90 hover:text-white'
                )}
                style={{ fontSize: '15px' }}
              >
                {item.label}
                <span className={cn(
                  'absolute -bottom-1 left-0 h-0.5 transition-all duration-300',
                  isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full',
                  showDarkHeader ? 'bg-primary' : 'bg-white'
                )} />
              </Link>
            ))}
          </nav>

          {/* Right Section - Actions */}
          {/* Icons: 24x24px, 24px spacing */}
          <div className="flex items-center" style={{ gap: '24px' }}>
            <button className={cn(
              'hidden md:flex items-center justify-center rounded-full transition-colors',
              showDarkHeader ? 'hover:bg-secondary text-foreground hover:text-primary' : 'hover:bg-white/10 text-white'
            )} style={{ width: '24px', height: '24px' }}>
              <Search style={{ width: '24px', height: '24px' }} />
            </button>
            <button className={cn(
              'hidden md:flex relative items-center justify-center rounded-full transition-colors',
              showDarkHeader ? 'hover:bg-secondary text-foreground hover:text-primary' : 'hover:bg-white/10 text-white'
            )} style={{ width: '24px', height: '24px' }}>
              <Bell style={{ width: '24px', height: '24px' }} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-destructive rounded-full" />
            </button>
            <button className={cn(
              'hidden md:flex items-center justify-center rounded-full transition-colors',
              showDarkHeader ? 'hover:bg-secondary text-foreground hover:text-primary' : 'hover:bg-white/10 text-white'
            )} style={{ width: '24px', height: '24px' }}>
              <Bot style={{ width: '24px', height: '24px' }} />
            </button>
            
            {/* Profile Avatar: 32px diameter */}
            <div 
              className={cn(
                'hidden md:flex rounded-full items-center justify-center transition-colors duration-300',
                showDarkHeader ? 'bg-primary/10' : 'bg-white/20'
              )}
              style={{ width: '32px', height: '32px' }}
            >
              <User 
                className={showDarkHeader ? 'text-foreground' : 'text-white'} 
                style={{ width: '16px', height: '16px' }} 
              />
            </div>
            
            {/* Button: 12px 24px padding, 15px font, 24px border-radius */}
            <Button
              className={cn(
                'hidden md:inline-flex font-semibold transition-all duration-300',
                showDarkHeader 
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                  : 'bg-white text-primary hover:bg-white/90'
              )}
              style={{ 
                padding: '12px 24px', 
                fontSize: '15px',
                borderRadius: '24px',
                height: 'auto'
              }}
            >
              Get Started
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'lg:hidden p-2 rounded-full transition-colors',
                showDarkHeader ? 'hover:bg-secondary text-foreground' : 'hover:bg-white/10 text-white'
              )}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-border shadow-lg"
          >
            <nav className="container mx-auto px-5 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'block text-base font-medium transition-colors py-2',
                    isActive(item.href) ? 'text-primary' : 'text-foreground hover:text-primary'
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                className="w-full mt-4 rounded-full bg-primary text-primary-foreground"
                style={{ borderRadius: '24px', padding: '12px 24px' }}
              >
                Get Started
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
