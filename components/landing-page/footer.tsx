import React, { useState, FC } from 'react';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail,
  MessageCircle,
  Phone,
  MapPin,
  ChevronDown
} from 'lucide-react';
import { motion } from 'framer-motion';
interface NavigationItem {
  name: string;
  href: string;
}

interface ContactItem {
  icon: React.ElementType;
  text: string;
  href: string;
}

const Footer: FC = () => {
  const [openSection, setOpenSection] = useState<string>('');

  const navigation = {
    product: [
      { name: 'Features', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'API Reference', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Press', href: '#' },
    ],
    resources: [
      { name: 'Community', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'Partners', href: '#' },
      { name: 'Status', href: '#' },
    ],
    contact: [
      { icon: MessageCircle, text: 'Live Chat Support', href: '#' },
      { icon: Mail, text: 'support@example.com', href: 'mailto:support@example.com' },
      { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
      { icon: MapPin, text: 'West Bengal,Bankura', href: '#' },
    ]
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? '' : section);
  };

  interface FooterSectionProps {
    title: string;
    items: NavigationItem[] | ContactItem[];
    isContact?: boolean;
  }

  const FooterSection: FC<FooterSectionProps> = ({ title, items, isContact = false }) => {
    const isOpen = openSection === title.toLowerCase();

    return (
      <div className="border-b border-[#2A2A2A] md:border-none">
        <button
          onClick={() => toggleSection(title.toLowerCase())}
          className="flex w-full items-center justify-between py-4 md:cursor-default md:py-0"
        >
          <h4 className="text-sm font-semibold uppercase text-white">{title}</h4>
          <ChevronDown 
            className={`size-5 text-gray-400 transition-transform duration-200 md:hidden ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
        
        <ul className={`space-y-3 overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0 md:max-h-96'
        }`}>
          {isContact ? (
            (items as ContactItem[]).map((item) => (
              <li key={item.text}>
                <a href={item.href} className="flex items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-white">
                  <item.icon size={16} />
                  {item.text}
                </a>
              </li>
            ))
          ) : (
            (items as NavigationItem[]).map((item) => (
              <li key={item.name}>
                <a href={item.href} className="text-sm text-gray-400 transition-colors duration-200 hover:text-white">
                  {item.name}
                </a>
              </li>
            ))
          )}
        </ul>
      </div>
    );
  };

  return (
    <footer className="border-t border-[#2A2A2A] bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="hidden border-b border-[#2A2A2A] py-12 md:block">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <h3 className="mb-2 text-lg font-semibold text-white">
                Subscribe to our newsletter
              </h3>
              <p className="text-sm text-gray-400">
                Stay up to date with the latest news, announcements, and articles.
              </p>
            </div>
            <div className="w-full lg:w-auto">
              <div className="flex flex-col gap-3 sm:flex-row">
                {/* Uncomment and replace placeholder elements with actual inputs/buttons */}
              </div>
            </div>
          </div>
        </div>

        <div className="py-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="mb-6 flex items-center gap-2">
                <div className="size-8 rounded-lg bg-blue-600"></div>
                <span className="text-xl font-bold text-white">Resolva</span>
              </div>
              <p className="mb-6 max-w-md text-sm text-gray-400">
                Building the future of software development. Our platform helps developers and teams ship better software, faster.
              </p>
              <div className="flex flex-col gap-4 md:gap-8">
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 transition-colors duration-200 hover:text-white">
                  <Github size={20} />
                </a>
                <a href="#" className="text-gray-400 transition-colors duration-200 hover:text-white">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 transition-colors duration-200 hover:text-white">
                  <Linkedin size={20} />
                </a>
              </div>
              <div className="flex items-center gap-2">
              <motion.span 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="size-2 rounded-full bg-emerald-500"
                
              />
              <span>Status</span>
              </div>
              </div>
            </div>

            <FooterSection title="Product" items={navigation.product} />
            <FooterSection title="Company" items={navigation.company} />
            <FooterSection title="Contact" items={navigation.contact} isContact={true} />
          </div>
        </div>

        <div className="border-t border-[#2A2A2A] py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Resolva, Inc. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-400 transition-colors duration-200 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 transition-colors duration-200 hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-400 transition-colors duration-200 hover:text-white">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
