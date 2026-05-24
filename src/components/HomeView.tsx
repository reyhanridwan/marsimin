/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Hammer, CheckCircle2, Star, Quote, ChevronRight, HelpCircle, PhoneCall, Building } from 'lucide-react';
import { IMAGES } from '../constants/images';
import { SERVICES_DATA, TESTIMONIALS_DATA, FAQ_DATA } from '../data';
import BeforeAfterSlider from './BeforeAfterSlider';
import RabCalculator from './RabCalculator';

interface HomeViewProps {
  setActiveTab: (tab: string) => void;
}

export default function HomeView({ setActiveTab }: HomeViewProps) {
  // HERO CAROUSEL: Autoplay 5000ms, ultra-smooth cross-fade switching between 2 exact slides
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slides = [IMAGES.heroSlide1, IMAGES.heroSlide2];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Micro-FAQ Accordion State for Home Preview (Limit to first 3)
  const [openFaq, setOpenFaq] = useState<string | null>(FAQ_DATA[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="w-full text-zinc-100 overflow-hidden">
      
      {/* 1. HERO SECTION (Carousel Autoplay + FADE transition) */}
      <section className="relative h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Carousel Background Images (Smooth opacity blend) */}
        {slides.map((slideUrl, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 bg-zinc-800 transition-opacity duration-[1500ms] ease-in-out ${
              currentSlide === idx ? 'opacity-100 scale-100 z-0' : 'opacity-0 scale-105 -z-10'
            }`}
          >
            <img
              src={slideUrl}
              alt={`Slide ${idx + 1} Marsimin Konstruksi`}
              loading={idx === 0 ? 'eager' : 'lazy'}
              decoding="async"
              className="w-full h-full object-cover pointer-events-none"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}

        {/* Ambient Overlay for contrast */}
        <div className="absolute inset-0 bg-zinc-950/70 backdrop-blur-[1px]" />

        {/* Text and CTA Buttons Container (Rapi & Center) */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center justify-center">
          
          {/* Badge Atas pill translucent */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg shadow-black/30 mb-6"
          >
            <span className="w-1.5 h-1.5 bg-[#EA580C] rounded-full animate-pulse" />
            <span className="text-[10px] md:text-[11px] font-mono tracking-[0.2em] font-black uppercase text-[#EA580C]">
              “KOKOH, PRESISI, DAN DIBANGUN UNTUK GENERASI.”
            </span>
          </motion.div>

          {/* Judul Utama (Ukuran Sedang sesuai deskripsi) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-sans text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight max-w-3xl mb-4"
          >
            “Wujudkan Rumah Impian Anda dari Nol Hingga Sempurna.”
          </motion.h1>

          {/* Sub-deskripsi (Kecil & Lembut miring) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-zinc-400 text-xs md:text-sm italic leading-relaxed max-w-2xl font-normal tracking-wide mb-8"
          >
            “Kami percaya struktur yang kuat berawal dari perencanaan yang matang. Dari bangun baru hingga renovasi total, kami hadir memastikan setiap sudut hunian Anda kokoh, fungsional, dan bernilai tinggi.”
          </motion.p>

          {/* Tombol CTA capsule oval thin white border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <button
              onClick={() => setActiveTab('contact')}
              className="px-8 py-3.5 rounded-full border border-zinc-300 text-zinc-100 font-bold bg-transparent tracking-widest text-xs uppercase hover:border-[#EA580C] hover:text-white transition-all duration-300 flex items-center gap-2 group shadow-lg cursor-pointer"
            >
              <span>Mulai Konsultasi Proyek</span>
              <ArrowRight size={14} className="text-[#EA580C] group-hover:translate-x-1.5 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Carousel indicator slides dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 transition-all duration-300 rounded ${
                currentSlide === idx ? 'bg-[#EA580C] w-8' : 'bg-white/20 hover:bg-white/40 w-2'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. SERVICES HIGHLIGHT (Grid 4 Kolom) */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-[#EA580C] font-mono text-xs font-black tracking-widest uppercase block mb-2">
              LAYANAN UNGGULAN
            </span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
              Keahlian Konstruksi Presisi
            </h2>
            <div className="w-12 h-1 bg-[#EA580C] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900 border border-zinc-800/80 rounded-xl overflow-hidden p-6 hover:border-[#EA580C]/40 group hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center font-bold text-lg mb-5 group-hover:bg-[#EA580C] group-hover:text-white transition-all duration-300">
                    <Hammer size={20} />
                  </div>
                  <h3 className="font-sans font-bold text-sm uppercase tracking-wide text-white mb-2 group-hover:text-[#EA580C] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 group-hover:text-[#EA580C]">
                    REKAYASA SIPIL
                  </span>
                  <CheckCircle2 size={14} className="text-[#EA580C] opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROJECT SHORTCUT (Before-After & Link) */}
      <section className="py-20 bg-zinc-900 border-y border-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side text */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[#EA580C] font-mono text-xs font-black tracking-widest uppercase block mb-1">
                KUALITAS BUKTI NYATA
              </span>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                Dapatkan Sebelum &amp; Sesudah Perubahan
              </h2>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                Setiap proyek renovasi total dan rancang baru kami kerjakan dengan komitmen ketahanan maksimal. Lihat perbandingan visual nyata dari dinding rontok berjamur hingga menjadi ruko dan villa asri bernilai tinggi.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Material beton SNI bersertifikat K-250 / K-300',
                  'Teknik pengerjaan presisi laser-leveling',
                  'Transparansi volume kerja tanpa markup sepihak'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 size={16} className="text-[#EA580C]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setActiveTab('projects')}
                  className="bg-[#EA580C] hover:bg-[#c2410c] text-white text-xs font-bold tracking-widest uppercase py-3.5 px-6 rounded-lg transition-colors flex items-center gap-2 group cursor-pointer shadow-lg shadow-[#EA580C]/10"
                >
                  <span>Lihat Semua Proyek</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right side Visual Before-After widget */}
            <div className="lg:col-span-7">
              <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800">
                <BeforeAfterSlider
                  beforeImage={IMAGES.homeBefore}
                  afterImage={IMAGES.homeAfter}
                  title="PREVIEW PROYEK: RENOVASI TOTAL TANGERANG"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CHIEF RAB CALCULATOR SECTION */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-[#EA580C] font-mono text-xs font-black tracking-widest uppercase block mb-2">
              ESTIMASI TRANSPARAN
            </span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
              Hitung Biaya Rumah Impian Anda
            </h2>
            <div className="w-12 h-1 bg-[#EA580C] mx-auto mt-4" />
          </div>

          <RabCalculator />
        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION (Up to 3, vertical on mobile) */}
      <section className="py-20 bg-zinc-900 border-t border-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-[#EA580C] font-mono text-xs font-black tracking-widest uppercase block mb-2">
              ULASAN KLIEN
            </span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
              Reputasi Amanah Terpercaya
            </h2>
            <div className="w-12 h-1 bg-[#EA580C] mx-auto mt-4" />
          </div>

          {/* Grid: 3 cards. Mobile vertical, desktop horizontal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((testi, index) => (
              <motion.div
                key={testi.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="bg-zinc-950 border border-zinc-850 p-6 rounded-xl relative flex flex-col justify-between"
              >
                <div className="absolute top-6 right-6 text-zinc-800">
                  <Quote size={40} className="opacity-15" />
                </div>

                <div>
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4 text-[#EA580C]">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#EA580C]" />
                    ))}
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300 leading-relaxed mb-6 italic">
                    “{testi.content}”
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-4 border-t border-zinc-900">
                  <div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-[#EA580C] text-xs font-black font-mono border border-zinc-700">
                    {testi.name[0] || 'K'}
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-white">
                      {testi.name}
                    </h4>
                    <span className="text-[10px] text-zinc-500 font-mono">
                      {testi.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOME FAQ PREVIEW */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-zinc-100">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-[#EA580C] font-mono text-xs font-black tracking-widest uppercase block mb-2">
              KONSULTASI PERTANYAAN
            </span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white animate-fade-in">
              FAQ Seputar Konstruksi
            </h2>
            <div className="w-12 h-1 bg-[#EA580C] mx-auto mt-4" />
          </div>

          <div className="space-y-3.5">
            {FAQ_DATA.slice(0, 3).map((faq) => (
              <div
                key={faq.id}
                className="bg-zinc-900 border border-zinc-800/80 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left py-4 px-5 flex justify-between items-center gap-4 text-zinc-100 font-bold text-xs md:text-sm uppercase tracking-wide cursor-pointer hover:bg-zinc-850"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle size={16} className="text-[#EA580C] shrink-0" />
                    {faq.question}
                  </span>
                  <span className={`text-[#EA580C] font-mono text-base font-bold transition-transform duration-300 ${
                    openFaq === faq.id ? 'rotate-90' : ''
                  }`}>
                    &rarr;
                  </span>
                </button>
                
                <AnimatePresence initial={false}>
                  {openFaq === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-zinc-850 bg-zinc-950/40"
                    >
                      <p className="p-5 text-xs text-zinc-400 leading-relaxed font-normal">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => setActiveTab('faq')}
              className="text-xs text-zinc-400 font-mono hover:text-[#EA580C] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>Tampilkan Semua Pertanyaan &rarr;</span>
            </button>
          </div>
        </div>
      </section>

      {/* 7. HOME CTA SECTION */}
      <section className="py-16 bg-gradient-to-tr from-zinc-950 via-zinc-900 to-zinc-950 border-t border-zinc-800 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#EA580C]/5 rounded-bl-full pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <Building className="mx-auto text-[#EA580C] animate-bounce stroke-[1.5]" size={42} />
          
          <h2 className="text-xl md:text-3xl font-black uppercase tracking-tight text-white max-w-2xl mx-auto leading-tight">
            Konsultasikan Rencana Bangunan Anda Sekarang
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Butuh estimasi nyata atau ingin melakukan survey ke lapangan area Binong, Curug, Kabupaten Tangerang? Klik tombol di bawah chat langsung via WhatsApp dengan Ir. Hendra Wijaya.
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 justify-center pt-2">
            <a
              href="https://wa.me/6288296125749"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#EA580C] hover:bg-[#c2410c] text-white font-black text-xs md:text-sm tracking-widest py-4 px-8 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-[#EA580C]/20 transition-all cursor-pointer hover:scale-[1.02]"
            >
              <PhoneCall size={16} />
              <span>KONSULTASI WHATSAPP SEKARANG</span>
            </a>
            <button
              onClick={() => setActiveTab('contact')}
              className="bg-transparent border border-zinc-700 hover:border-[#EA580C] text-zinc-300 hover:text-white font-bold text-xs font-mono tracking-widest py-4 px-8 rounded-full transition-all cursor-pointer"
            >
              KIRIM PESAN FORMULIR
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
