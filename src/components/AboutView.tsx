/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Quote, PhoneCall, Compass, Target, Sparkles, Trophy, Users, ShieldCheck } from 'lucide-react';
import { IMAGES } from '../constants/images';

export default function AboutView() {
  
  // Staggered animations setup for Vision and Mission cards
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
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
            <span className="text-[10px] font-mono tracking-widest font-black uppercase">TENTANG MARSIMIN JASA KONSTRUKSI</span>
          </div>
          <h1 className="font-sans text-3xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight">
            Profil Perusahaan Kami
          </h1>
          <div className="w-16 h-1.5 bg-zinc-950 mx-auto my-4 rounded-full" />
          <p className="text-zinc-100 text-xs md:text-sm font-medium max-w-xl leading-relaxed italic">
            "Berlandaskan kejujuran material, perhitungan tepat struktur sipil, dan dedikasi pembangunan berskala jangka panjang."
          </p>
        </div>
      </section>

      {/* FOUNDER SECTION (Fokus pada hanya 1 orang CEO & Founder) */}
      <section className="py-20 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Foto Besar yang Artistik (Kanan di Mobile, Kiri-ish di Desktop) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-md">
                {/* Decorative retro box border */}
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#EA580C] to-amber-500 opacity-20 blur-md group-hover:opacity-40 transition-opacity" />
                <div className="absolute inset-0 border-2 border-[#EA580C] rounded-2xl translate-x-3.5 translate-y-3.5 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
                
                <div className="aspect-[4/5] w-full rounded-2xl bg-zinc-800 border border-zinc-850 overflow-hidden relative shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-500 font-mono text-xs uppercase select-none">
                    Memuat Foto Founder...
                  </div>
                  <img
                    src={IMAGES.about.founder}
                    alt="Ir. Hendra Wijaya - Founder Marsimin Konstruksi"
                    loading="lazy"
                    decoding="async"
                    className="relative z-10 w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500 pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                  {/* Floating credentials */}
                  <div className="absolute bottom-4 left-4 z-20 bg-zinc-950/85 backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-lg">
                    <span className="text-[9px] font-mono tracking-widest text-[#EA580C] uppercase font-black block">FOUNDER &amp; CEO</span>
                    <span className="text-xs font-black uppercase text-white tracking-wider block mt-0.5">IR. HENDRA WIJAYA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Pribadi yang Inspiratif dan Deskripsi */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 bg-[#EA580C]/10 text-[#EA580C] px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase">
                <Trophy size={12} /> PROFIL PIMPINAN
              </div>
              
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                Ir. Hendra Wijaya
              </h2>
              <span className="text-xs font-mono tracking-widest text-[#EA580C] uppercase block -mt-4">
                CEO, PENDIRI, &amp; KEPALA STRUKTUR SIPIL MARSIMIN JASA KONSTRUKSI
              </span>

              {/* Inspirative Quote block */}
              <div className="bg-zinc-900 p-5 rounded-2xl border-l-4 border-[#EA580C] text-[#EA580C]/90 relative">
                <Quote size={32} className="absolute -top-3.5 right-4 opacity-5" />
                <p className="text-xs md:text-sm font-medium italic leading-relaxed font-sans text-zinc-200">
                  “Sebuah bangunan tidak sekadar didirikan di atas pasir dan semen, melainkan lahir dari kejujuran hitungan konstruksi dan komitmen moral untuk menjaga keselamatan penghuninya hingga bergenerasi-generasi.”
                </p>
              </div>

              <div className="space-y-4 text-xs md:text-sm text-zinc-400 font-normal leading-relaxed">
                <p>
                  Sebagai lulusan Teknik Sipil Universitas ternama di Indonesia yang telah berkiprah selama lebih dari 20 tahun di bidang infrastruktur perumahan, <strong>Ir. Hendra Wijaya</strong> mendirikan Marsimin Jasa Konstruksi dengan satu visi utama: membebaskan warga Tangerang dari kecemasan renovasi abal-abal yang cepat rusak atau runtuh.
                </p>
                <p>
                  Beliau secara langsung memimpin jalannya kalkulasi teknis (Rencana Anggaran Biaya, perhitungan kekuatan baja pondasi, dan penyusunan DED) di workshop kami, memastikan setiap tim tukang bekerja dengan kepatuhan tinggi terhadap aturan gambar kerja teknis sipil.
                </p>
              </div>

              {/* Founder stats */}
              <div className="grid grid-cols-3 gap-4 text-center bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                <div>
                  <div className="text-xl md:text-2xl font-black font-mono text-[#EA580C]">20+</div>
                  <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mt-1">Tahun Pengalaman</div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-black font-mono text-[#EA580C]">350+</div>
                  <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mt-1">Rumah Teraktif</div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-black font-mono text-[#EA580C]">100%</div>
                  <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mt-1">Sertifikasi SNI</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* VISION & MISSION SECTION: Icons load one by one with staggered entrance animations */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[#EA580C] font-mono text-xs font-black tracking-widest uppercase block mb-2">
              ARAH &amp; FILOSOFI KAMI
            </span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
              Visi &amp; Misi Perusahaan
            </h2>
            <div className="w-12 h-1 bg-[#EA580C] mx-auto mt-4" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {/* VISI */}
            <motion.div
              variants={cardVariants}
              className="bg-zinc-950 border border-zinc-850 p-8 rounded-2xl space-y-5 shadow-xl hover:border-[#EA580C]/35 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center border border-[#EA580C]/20">
                <Compass size={24} />
              </div>
              <h3 className="text-lg font-black uppercase tracking-wider text-white">Visi Agung Kami</h3>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-normal italic">
                “Menjadi penyedia jasa konstruksi mandiri paling jujur, transparan, dan berdedikasi tinggi di Tangerang Raya, yang terkenal atas ketahanan struktur fisik bangunan dan kepuasan mutlak klien.”
              </p>
            </motion.div>

            {/* MISI */}
            <motion.div
              variants={cardVariants}
              className="bg-zinc-950 border border-zinc-850 p-8 rounded-2xl space-y-5 shadow-xl hover:border-[#EA580C]/35 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center border border-[#EA580C]/20">
                <Target size={24} />
              </div>
              <h3 className="text-lg font-black uppercase tracking-wider text-white">Misi Pokok Konstruksi</h3>
              <ul className="space-y-4 text-xs md:text-sm text-zinc-400 font-normal leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#EA580C] font-bold font-mono shrink-0 mt-0.5">01.</span>
                  <span><strong>Ketepatan Hitungan:</strong> Menyingkirkan praktek hitungan sembarangan dengan terus menyandarkan rancangan pada aturan SNI (Standar Nasional Indonesia) struktur sipil kokoh.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#EA580C] font-bold font-mono shrink-0 mt-0.5">02.</span>
                  <span><strong>Kejujuran Mutlak:</strong> Menjamin volume dan standar spesifikasi pasir, semen, keramik, kusen, dan besi tulangan dibawakan secara utuh persis sesuai lembaran kontrak RAB yang disepakati.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#EA580C] font-bold font-mono shrink-0 mt-0.5">03.</span>
                  <span><strong>Kepuasan Purna-Jual:</strong> Menyediakan jaminan pemeliharaan purna-jual retensi selama 1 tahun penuh demi memberikan rasa tenang bagi setiap keluarga Indonesia.</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* TEAM SYNERGY BLOCK (Memanfaatkan IMAGES.about.team) */}
      <section className="py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[#EA580C] font-mono text-xs font-black tracking-widest uppercase block mb-1">
                TENAGA AHLI LAPANGAN
              </span>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                Sinergi Kru Besi &amp; Tukang Kayu Berpengalaman
              </h2>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-normal">
                Pondasi yang kokoh tidak akan terwujud tanpa tangan-tangan tukang terampil yang teliti di lapangan. Tukang kami memiliki pengalaman rata-rata 11 tahun di bidang pembesian, pengecoran balok kolom, dan pemasangan dinding bata presisi.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex gap-2.5 items-start">
                  <Sparkles size={16} className="text-[#EA580C] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs font-bold uppercase text-white">Keramik &amp; Granit Rapi</h4>
                    <span className="text-[10px] text-zinc-500 font-mono">Leveling air presisi tanpa kop</span>
                  </div>
                </div>
                <div className="flex gap-2.5 items-start">
                  <ShieldCheck size={16} className="text-[#EA580C] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs font-bold uppercase text-white">Pakar Atas Baja Ringan</h4>
                    <span className="text-[10px] text-zinc-500 font-mono">Rangka awet anti ambruk</span>
                  </div>
                </div>
                <div className="flex gap-2.5 items-start">
                  <Users size={16} className="text-[#EA580C] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs font-bold uppercase text-white">Kru Galian &amp; Footplat</h4>
                    <span className="text-[10px] text-zinc-500 font-mono">Fondasi dalam galian kokoh</span>
                  </div>
                </div>
                <div className="flex gap-2.5 items-start">
                  <Trophy size={16} className="text-[#EA580C] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs font-bold uppercase text-white">Mandor Sipil Bersertifikat</h4>
                    <span className="text-[10px] text-zinc-500 font-mono">Mengawasi presisi di lapangan</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-video w-full rounded-2xl bg-zinc-800 border border-zinc-850 overflow-hidden relative shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-500 font-mono text-[10px] uppercase select-none">
                  Memuat Foto Team...
                </div>
                <img
                  src={IMAGES.about.team}
                  alt="Tim Konstruksi Lapangan Marsimin Jasa Konstruksi"
                  loading="lazy"
                  decoding="async"
                  className="relative z-10 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating caption */}
                <div className="absolute bottom-4 right-4 z-20 bg-black/75 backdrop-blur px-3 py-1.5 text-[10px] text-zinc-300 font-mono rounded border border-white/10 uppercase tracking-widest">
                  FOTO AKTUAL PEKERJA LAPANGAN KAMI
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
