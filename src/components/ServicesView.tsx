/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, ClipboardList, PhoneCall, Hammer, Wrench, ShieldAlert } from 'lucide-react';
import { SERVICES_DATA } from '../data';

export default function ServicesView() {
  
  // Custom Icon Selector based on index
  const getServiceIcon = (index: number) => {
    switch (index) {
      case 0: return <Hammer className="w-5 h-5 text-white" />;
      case 1: return <Wrench className="w-5 h-5 text-white" />;
      case 2: return <ClipboardList className="w-5 h-5 text-white" />;
      default: return <Wrench className="w-5 h-5 text-white" />;
    }
  };

  return (
    <div className="w-full text-zinc-100 overflow-hidden">
      
      {/* HEADER: Full Orange background with decorative blur effects */}
      <section className="relative bg-[#EA580C] pt-32 pb-20 px-4 text-center overflow-hidden">
        {/* Blurry decorative background lamps */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/30 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur px-3.5 py-1.5 rounded-full border border-white/20 text-white mb-4">
            <span className="w-1.5 h-1.5 bg-zinc-950 rounded-full animate-ping" />
            <span className="text-[10px] font-mono tracking-widest font-black uppercase">LAYANAN UTAMA KONTRAKTOR</span>
          </div>
          <h1 className="font-sans text-3xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight">
            Layanan Konstruksi Marsimin
          </h1>
          <div className="w-16 h-1.5 bg-zinc-950 mx-auto my-4 rounded-full" />
          <p className="text-zinc-100 text-xs md:text-sm font-medium max-w-xl leading-relaxed italic">
            "Kami mengedepankan kualitas pengerjaan, kejujuran spesifikasi material, dan garansi pasca serah-terima kunci."
          </p>
        </div>
      </section>

      {/* SERVICES GRID Layout: 2 Kolom with big hover shadows */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {SERVICES_DATA.map((service, index) => (
              <div
                key={service.id}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#EA580C]/8 hover:border-[#EA580C]/35 hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
              >
                {/* Photo Header section with fixed ratio container & placeholder and load parameter */}
                <div className="relative aspect-[16/10] w-full bg-zinc-800 overflow-hidden border-b border-zinc-950">
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-500 font-mono text-[10px] tracking-wider uppercase select-none">
                    Memuat Gambar...
                  </div>
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    className="relative z-10 w-full h-full object-cover cursor-zoom-in hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Floating Icon inside service image */}
                  <div className="absolute top-5 left-5 z-20 w-11 h-11 bg-[#EA580C] rounded-lg flex items-center justify-center shadow-lg shadow-black/40">
                    {getServiceIcon(index)}
                  </div>
                </div>

                {/* Content section */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#EA580C] uppercase block mb-1">
                      KONTRAK SPESIALISASI
                    </span>
                    <h2 className="text-lg md:text-xl font-black uppercase tracking-tight text-white mb-3">
                      {service.title}
                    </h2>
                    <p className="text-xs md:text-sm text-zinc-400 font-normal leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullet features points checklist */}
                  <div className="space-y-3 pt-4 border-t border-zinc-900">
                    <div className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase font-black mb-2">
                      Rincian Cakupan &amp; Standar Kerja:
                    </div>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 font-normal">
                        <Check size={14} className="text-[#EA580C] mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* GUARANTEE & SAFETY BANNER */}
      <section className="py-16 bg-zinc-900 border-t border-zinc-950 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-5">
          <ShieldAlert size={36} className="text-[#EA580C] mx-auto opacity-80" />
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white">
            Keselamatan Kerja &amp; Garansi Retensi Terdepan
          </h2>
          <p className="text-xs md:text-sm text-zinc-400 leading-relaxed max-w-2xl mx-auto font-normal">
            Di Marsimin Jasa Konstruksi, keselamatan kerja kru sipil di lapangan merupakan prioritas tanpa syarat. Setiap proyek dilengkapi asuransi kerja dan dipandu langsung oleh tukang berpengalaman lebih dari 15 tahun. Kami memberikan garansi retensi hingga 1 tahun penuh.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/6288296125749?text=Halo%20Marsimin%20Konstruksi%20saya%2520ingin%2520konsultasi%2520proyek"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-[#EA580C] hover:bg-[#c2410c] text-white text-xs font-black font-mono tracking-widest uppercase py-3.5 px-6 rounded-lg shadow-lg shadow-[#EA580C]/10 transition-colors gap-2 cursor-pointer"
            >
              <PhoneCall size={14} />
              <span>DAPATKAN SURVEY DI LOKASI ANDA</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
