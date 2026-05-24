/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, X, PhoneCall, Hammer } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'Projects', id: 'projects' },
    { label: 'Services', id: 'services' },
    { label: 'About Us', id: 'about' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-10 h-10 bg-[#EA580C] rounded-lg flex items-center justify-center text-white transition-all group-hover:rotate-6 shadow-md shadow-[#EA580C]/20">
              <Hammer size={20} className="stroke-[2.5]" />
            </div>
            <div>
              <span className="text-lg font-black tracking-wider uppercase text-white block">
                MARSIMIN
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#EA580C] uppercase block -mt-1 font-bold">
                JASA KONSTRUKSI
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 text-xs font-black tracking-widest uppercase transition-all duration-200 border-b-2 cursor-pointer ${
                  activeTab === item.id || (item.id === 'faq' && activeTab === 'faq-full')
                    ? 'text-[#EA580C] border-[#EA580C]'
                    : 'text-zinc-400 border-transparent hover:text-white hover:border-zinc-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact Direct Call CTA (Desktop) */}
          <div className="hidden md:flex items-center">
            <a
              href="https://wa.me/6288296125749"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#EA580C]/10 text-[#EA580C] border border-[#EA580C]/30 hover:bg-[#EA580C] hover:text-white px-5 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:shadow-[#EA580C]/15 cursor-pointer"
            >
              <PhoneCall size={14} />
              <span>+62 882-9612-5749</span>
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-white focus:outline-none p-2 rounded bg-zinc-900 border border-zinc-800 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-zinc-950 border-b border-zinc-900 overflow-hidden"
          >
            <div className="px-3 pt-2 pb-6 space-y-1.5 sm:px-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 text-sm font-black tracking-widest uppercase rounded-lg transition-all border-l-2 cursor-pointer ${
                    activeTab === item.id
                      ? 'bg-zinc-900/85 text-[#EA580C] border-[#EA580C]'
                      : 'text-zinc-300 border-transparent hover:bg-zinc-900 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-zinc-900 px-4">
                <a
                  href="https://wa.me/6288296125749"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#EA580C] hover:bg-[#c2410c] text-white text-xs font-bold font-mono py-3.5 px-4 rounded-lg flex items-center justify-center gap-2 tracking-widest uppercase transition-colors shadow shadow-[#EA580C]/10"
                >
                  <PhoneCall size={14} />
                  <span>HUBUNGI WHATSAPP</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
