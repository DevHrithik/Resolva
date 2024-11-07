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
          className="w-full flex items-center justify-between py-4 md:py-0 md:cursor-default"
        >
          <h4 className="text-sm font-semibold text-white uppercase">{title}</h4>
          <ChevronDown 
            className={`md:hidden w-5 h-5 text-gray-400 transition-transform duration-200 ${
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
                <a href={item.href} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  <item.icon size={16} />
                  {item.text}
                </a>
              </li>
            ))
          ) : (
            (items as NavigationItem[]).map((item) => (
              <li key={item.name}>
                <a href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
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
    <footer className="bg-[#010207] border-t border-[#2A2A2A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#2A2A2A] py-12 hidden md:block">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="max-w-xl">
              <h3 className="text-lg font-semibold text-white mb-2">
                Subscribe to our newsletter
              </h3>
              <p className="text-gray-400 text-sm">
                Stay up to date with the latest news, announcements, and articles.
              </p>
            </div>
            <div className="w-full lg:w-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Uncomment and replace placeholder elements with actual inputs/buttons */}
              </div>
            </div>
          </div>
        </div>

        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
                <span className="text-xl font-bold text-white">Resolva</span>
              </div>
              <p className="text-gray-400 text-sm mb-6 max-w-md">
                Building the future of software development. Our platform helps developers and teams ship better software, faster.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Github size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <FooterSection title="Product" items={navigation.product} />
            <FooterSection title="Company" items={navigation.company} />
            <FooterSection title="Contact" items={navigation.contact} isContact={true} />
          </div>
        </div>

        <div className="border-t border-[#2A2A2A] py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Resolva, Inc. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
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
