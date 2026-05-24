/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Check, ClipboardList, AlertTriangle, Lightbulb, PhoneCall } from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import BeforeAfterSlider from './BeforeAfterSlider';
import ProjectCarousel from './ProjectCarousel';

export default function ProjectsView() {
  return (
    <div className="w-full text-zinc-100 overflow-hidden">
      
      {/* HEADER: Full Orange background with decorative blur effects */}
      <section className="relative bg-[#EA580C] pt-32 pb-20 px-4 text-center overflow-hidden">
        {/* Blurry decorative lights */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-amber-400/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-zinc-950/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <CommandLineBadge text="PORTOFOLIO STRUKTUR" stroke="border-white/20 text-white" />
          <h1 className="font-sans text-3xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight mt-4">
            Proyek Pilihan Marsimin
          </h1>
          <div className="w-16 h-1.5 bg-zinc-950 mx-auto my-4 rounded-full" />
          <p className="text-zinc-100 text-xs md:text-sm font-medium max-w-xl leading-relaxed italic">
            "Kami mengutamakan kualitas, kecepatan, dan akurasi di setiap rincian pekerjaan. Dari penguatan fondasi sipil bawah hingga kemegahan visual fasad atas."
          </p>
        </div>
      </section>

      {/* PORTFOLIO LISTING */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {PROJECTS_DATA.map((project, index) => (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start border-b border-zinc-900 pb-20 last:border-0 last:pb-0"
            >
              
              {/* LEFT SIDE: Project information & narrative */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded bg-[#EA580C]/20 border border-[#EA580C]/40 text-[#EA580C] text-xs font-mono font-bold flex items-center justify-center">
                    0{index + 1}
                  </span>
                  <span className="text-[11px] font-mono tracking-widest text-[#EA580C] uppercase font-black">
                    PROYEK SELESAI
                  </span>
                </div>

                <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white leading-tight">
                  {project.title}
                </h2>
                
                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Challenges and Solutions container */}
                <div className="space-y-4 pt-3.5 border-t border-zinc-900">
                  {/* Challenge card */}
                  <div className="bg-zinc-900/40 p-4 rounded-xl border border-rose-950/30 flex gap-3.5 items-start">
                    <div className="w-8 h-8 rounded bg-rose-500/10 text-rose-500 flex items-center justify-center shrink-0">
                      <AlertTriangle size={15} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-mono uppercase tracking-widest font-black text-rose-500 mb-1">
                        Tantangan Teknis Lahan:
                      </h4>
                      <p className="text-xs text-zinc-400 font-normal italic leading-relaxed">
                        “{project.challenge}”
                      </p>
                    </div>
                  </div>

                  {/* Solution card */}
                  <div className="bg-zinc-900/40 p-4 rounded-xl border border-emerald-950/30 flex gap-3.5 items-start">
                    <div className="w-8 h-8 rounded bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                      <Lightbulb size={15} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-mono uppercase tracking-widest font-black text-emerald-400 mb-1">
                        Solusi Konstruktif Marsimin:
                      </h4>
                      <p className="text-xs text-zinc-400 font-normal italic leading-relaxed">
                        “{project.solution}”
                      </p>
                    </div>
                  </div>
                </div>

                {/* Checklist parameters */}
                <div className="pt-2 grid grid-cols-2 gap-3 text-xs font-normal text-zinc-400">
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-[#EA580C]" />
                    <span>Garansi 12 Bulan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-[#EA580C]" />
                    <span>Survey Tangerang Gratis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-[#EA580C]" />
                    <span>Izin Lingkungan Aman</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-[#EA580C]" />
                    <span>Sesuai RAB Kontrak</span>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: Visual Showcase (Before-after is the main visual, Project Carousel under) */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* BEFORE-AFTER INTERACTIVE SLIDER */}
                <div className="bg-zinc-900/60 p-3 rounded-2xl border border-zinc-900 shadow-2xl">
                  <BeforeAfterSlider
                    beforeImage={project.beforeUrl}
                    afterImage={project.afterUrl}
                    heightClass="aspect-[16/9]"
                  />
                </div>

                {/* MULTI AUTO-SLIDE CAROUSEL (Under the before-after) */}
                <ProjectCarousel
                  images={project.gallery}
                  projectTitle={project.title}
                />

              </div>

            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA SECTION */}
      <section className="py-20 bg-zinc-900 border-t border-zinc-950 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#EA580C] to-transparent" />
        
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <ClipboardList size={40} className="text-[#EA580C] mx-auto animate-pulse" />
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
            Tertarik Mereplika Keberhasilan Struktur Ini?
          </h2>
          <p className="text-xs md:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Dari renovasi kos-kosan tingkat di Tangerang hingga modernisasi fasad, kami siap menghadirkan tim tukang spesialis bersertifikasi. Konsultasikan detailnya via WhatsApp hari ini.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="https://wa.me/6288296125749?text=Halo%20Marsimin%20Konstruksi%20saya%2520ingin%2520tanya%2520mengenai%2520proyek%2520bangunan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#EA580C] hover:bg-[#c2410c] text-white font-black text-xs md:text-sm tracking-widest py-4 px-8 rounded-full flex items-center gap-2 shadow-lg shadow-[#EA580C]/20 transition-all cursor-pointer"
            >
              <PhoneCall size={16} />
              <span>AJUKAN SURVEY LOKASI GRATIS</span>
            </a>
            <span className="text-xs font-mono text-zinc-500">
              *Tersedia untuk area Binong, Curug, &amp; Tangerang Raya.
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}

// Sub component helper
function CommandLineBadge({ text, stroke = 'border-[#EA580C]/30 text-[#EA580C]' }: { text: string; stroke?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 bg-black/40 backdrop-blur px-3 py-1.5 rounded-full border ${stroke}`}>
      <span className="w-1.5 h-1.5 bg-[#EA580C] rounded-full" />
      <span className="text-[10px] font-mono tracking-widest font-extrabold uppercase">{text}</span>
    </div>
  );
}
