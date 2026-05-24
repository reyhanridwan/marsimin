/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, Check, BookOpen, Clock, Award, Landmark, Wallet } from 'lucide-react';
import { FAQ_DATA } from '../data';

export default function FaqView() {
  const [activeCategory, setActiveCategory] = useState<'semua' | 'layanan' | 'biaya' | 'waktu'>('semua');
  const [openFaq, setOpenFaq] = useState<string | null>(FAQ_DATA[0].id);

  const categories = [
    { label: 'Semua Pertanyaan', id: 'semua' },
    { label: 'Sistem Layanan', id: 'layanan' },
    { label: 'Rincian Biaya', id: 'biaya' },
    { label: 'Waktu Pengerjaan', id: 'waktu' }
  ];

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    if (activeCategory === 'semua') return true;
    return faq.category === activeCategory;
  });

  const toggleAccordion = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="w-full text-zinc-100 overflow-hidden">
      
      {/* HEADER: Full Orange background with decorative blur effects */}
      <section className="relative bg-[#EA580C] pt-32 pb-20 px-4 text-center overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-zinc-950/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-90 h-90 bg-amber-400/30 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur px-3.5 py-1.5 rounded-full border border-white/20 text-white mb-4">
            <span className="w-1.5 h-1.5 bg-zinc-950 rounded-full" />
            <span className="text-[10px] font-mono tracking-widest font-black uppercase">AKORDION INFORMASI</span>
          </div>
          <h1 className="font-sans text-3xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight">
            Pusat Bantuan FAQ
          </h1>
          <div className="w-16 h-1.5 bg-zinc-950 mx-auto my-4 rounded-full" />
          <p className="text-zinc-100 text-xs md:text-sm font-medium max-w-xl leading-relaxed italic">
            "Menjawab pertanyaan mendasar seputar proses legalitas, material SNI, durasi tukang sipil bekerja, dan cara pembayaran berjangka."
          </p>
        </div>
      </section>

      {/* FILTER BUTTONS & MINIMAL ACCORDIONS LIST */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Categories Tab selectors */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-zinc-900 pb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id as any);
                  setOpenFaq(null); // Close active on category switch
                }}
                className={`px-5 py-2.5 rounded-lg text-xs font-black tracking-widest uppercase transition-all duration-300 border cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#EA580C] text-white border-[#EA580C] shadow-lg shadow-[#EA580C]/10'
                    : 'bg-zinc-900/50 text-zinc-400 border-zinc-850 hover:bg-zinc-900 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* FAQ Minimal Accordions representation with Orange accents */}
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredFaqs.map((faq) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  key={faq.id}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:border-zinc-700/80"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left py-4 px-5 flex justify-between items-center gap-4 text-zinc-100 font-bold text-xs md:text-sm uppercase tracking-wide cursor-pointer hover:bg-zinc-850/65"
                  >
                    <span className="flex items-center gap-2.5">
                      <HelpCircle size={16} className="text-[#EA580C] shrink-0" />
                      {faq.question}
                    </span>
                    <span className={`text-[#EA580C] font-mono text-base font-bold transition-transform duration-300 ${
                      openFaq === faq.id ? 'rotate-90' : ''
                    }`}>
                      &rarr;
                    </span>
                  </button>
                  
                  {openFaq === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-zinc-850 bg-zinc-950/30"
                    >
                      <div className="p-5 text-xs md:text-sm text-zinc-400 leading-relaxed font-normal space-y-3">
                        <p>{faq.answer}</p>
                        {/* Categorization tag parameter inside the answer */}
                        <div className="flex items-center gap-2 pt-2.5 text-[10px] font-mono text-zinc-500 uppercase">
                          <Check size={12} className="text-[#EA580C]" />
                          <span>Kategori: <strong>{faq.category} MARSIMIN KONSTRUKSI</strong></span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
            
            {filteredFaqs.length === 0 && (
              <div className="text-center py-10 text-zinc-500 text-xs font-mono">
                Tidak ada pertanyaan spesifik dalam kategori ini.
              </div>
            )}
          </div>

          {/* Short guarantees parameters with neat inline icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16 pt-10 border-t border-zinc-900 text-center">
            <div className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-850 flex flex-col items-center gap-2">
              <div className="text-[#EA580C]"><Award size={18} /></div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Garansi Pasti</h4>
              <span className="text-[10px] text-zinc-500">Masa pemeliharaan purna-jual bersertifikat</span>
            </div>
            <div className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-850 flex flex-col items-center gap-2">
              <div className="text-[#EA580C]"><BookOpen size={18} /></div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Sertifikat Resmi</h4>
              <span className="text-[10px] text-zinc-500">Gambar kerja &amp; kalkulasi aman proses IMB</span>
            </div>
            <div className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-850 flex flex-col items-center gap-2">
              <div className="text-[#EA580C]"><Wallet size={18} /></div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Metode Berjangka</h4>
              <span className="text-[10px] text-zinc-500">Termin pembayaran sesuai progres aktual</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
