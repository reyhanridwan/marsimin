/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Page Views
import HomeView from './components/HomeView';
import ProjectsView from './components/ProjectsView';
import ServicesView from './components/ServicesView';
import AboutView from './components/AboutView';
import FaqView from './components/FaqView';
import ContactView from './components/ContactView';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');

  // Custom view selector
  const renderView = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView setActiveTab={setActiveTab} />;
      case 'projects':
        return <ProjectsView />;
      case 'services':
        return <ServicesView />;
      case 'about':
        return <AboutView />;
      case 'faq':
        return <FaqView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-zinc-950 text-zinc-100 font-sans selection:bg-[#EA580C] selection:text-white">
      {/* Scroll restorer watcher */}
      <ScrollToTop activeTab={activeTab} />

      {/* Primary navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Central main page stage with AnimatePresence for smooth fade transitions */}
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="w-full h-full"
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Sticky fast footer layout */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
