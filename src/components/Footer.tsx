import { motion } from 'framer-motion';
import { Linkedin, Twitter, Youtube, Mail } from 'lucide-react';

const footerLinks = {
  about: {
    title: 'About',
    links: [
      { label: 'About Amgen Procurement', href: '#' },
      { label: 'Leadership', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'API Access', href: '#' },
      { label: 'Support Center', href: '#' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Compliance', href: '#' },
    ],
  },
  connect: {
    title: 'Connect',
    links: [
      { label: 'LinkedIn', href: '#', icon: Linkedin },
      { label: 'Twitter', href: '#', icon: Twitter },
      { label: 'YouTube', href: '#', icon: Youtube },
      { label: 'Contact Us', href: '#', icon: Mail },
    ],
  },
};

export const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold tracking-tight mb-4">AMGEN</div>
            <p className="text-white/60 text-sm mb-6 max-w-sm">
              AI-Powered Procurement Intelligence for life-changing medicine. 
              Driving sustainable growth across $12B+ global operations.
            </p>
            <div className="flex items-center gap-4">
              {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).slice(0, 3).map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2026 Amgen Inc. All rights reserved.
          </p>
          <p className="text-white/40 text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            AI-Powered Procurement Intelligence
          </p>
        </div>
      </div>
    </footer>
  );
};
