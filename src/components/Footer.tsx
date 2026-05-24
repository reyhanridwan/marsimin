/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hammer, Mail, Phone, MapPin, Landmark, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleQuickLink = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-16 pb-8 border-t border-zinc-900 relative">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#EA580C] to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Logo & Description */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => handleQuickLink('home')}>
              <div className="w-9 h-9 bg-[#EA580C] rounded flex items-center justify-center text-white font-black text-lg">
                <Hammer size={18} />
              </div>
              <div>
                <span className="text-base font-black tracking-wider text-white uppercase block">
                  MARSIMIN
                </span>
                <span className="text-[9px] font-mono tracking-widest text-[#EA580C] uppercase block -mt-1 font-extrabold">
                  KOKOH &amp; PRESISI
                </span>
              </div>
            </div>
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed max-w-sm">
              Perusahaan penyedia jasa kontraktor dan renovasi bangunan terpercaya berpangkalan di Binong, Tangerang. Kami mendirikan konstruksi berskala generasi dengan kejujuran material dan ketelitian fondasi.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
              <Landmark size={14} className="text-[#EA580C]" />
              <span>Bergaransi legal &amp; Masa Retensi Handal</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-black tracking-widest text-white uppercase font-mono">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              {[
                { name: 'Home Utama', id: 'home' },
                { name: 'Proyek Portofolio', id: 'projects' },
                { name: 'Layanan Konstruksi', id: 'services' },
                { name: 'Tentang Founder', id: 'about' },
                { name: 'Pertanyaan (FAQ)', id: 'faq' },
                { name: 'Formulir Kontak', id: 'contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleQuickLink(link.id)}
                    className="hover:text-[#EA580C] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>&mdash;</span>
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Area */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-black tracking-widest text-white uppercase font-mono">
              Kantor &amp; Hubungi Kami
            </h4>
            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-2.5 leading-relaxed text-zinc-300">
                <MapPin size={16} className="text-[#EA580C] shrink-0 mt-0.5" />
                <span>
                  <strong>Workshop Utama:</strong><br />
                  Binong, Kec. Curug, Kabupaten Tangerang, Banten 15810
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-300">
                <Phone size={16} className="text-[#EA580C] shrink-0" />
                <a
                  href="https://wa.me/6288296125749"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#EA580C] transition-colors"
                >
                  +62 882-9612-5749 (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-300">
                <Mail size={16} className="text-[#EA580C] shrink-0" />
                <span className="font-mono">info@marsiminkonstruksi.com</span>
              </div>
            </div>
            
            {/* Tangerang badge */}
            <div className="bg-zinc-900 border border-zinc-800 p-3 rounded-lg flex items-center justify-between text-[11px] text-zinc-400">
              <span>Wilayah Kerja Aktif: <strong>Tangerang Raya</strong></span>
              <ArrowUpRight size={14} className="text-[#EA580C]" />
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-zinc-500 font-mono">
          <p>© {currentYear} Marsimin Jasa Konstruksi. Hak Cipta Dilindungi Undang-Undang.</p>
          <p className="mt-2.5 sm:mt-0 text-[10px] text-zinc-600">
            Didesain Kokoh &amp; Presisi Tangerang Banten
          </p>
        </div>
      </div>
    </footer>
  );
}
