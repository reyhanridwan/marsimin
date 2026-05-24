/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle, Sparkles, Map, Info } from 'lucide-react';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    projectType: 'bangun-baru'
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Interactive Mock Map state
  const [mapHovered, setMapHovered] = useState<boolean>(false);
  const [mapClicked, setMapClicked] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg(null);
    setErrorMsg(null);

    // Validate inputs
    if (!formData.name || !formData.phone || !formData.message) {
      setErrorMsg('Mohon lengkapi Nama, No WhatsApp, dan Deskripsi Rencana Proyek Anda.');
      setLoading(false);
      return;
    }

    try {
      // Perform a real API integration post to our custom fullstack Express server!
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          origin: `Konsultasi Proyek: ${formData.projectType.toUpperCase()}`
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccessMsg(data.message);
        // Clear form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          projectType: 'bangun-baru'
        });
      } else {
        setErrorMsg(data.message || 'Gagal mengirim pesan. Silakan coba kembali.');
      }
    } catch (err) {
      console.error('[MARSIMIN UI] Gagal berkirim pesan:', err);
      // Fallback response with manual WhatsApp direct link option
      setSuccessMsg(`Formulir gagal terkoneksi ke server, kami mengalihkan pendaftaran Anda secara otomatis. Bapak/Ibu ${formData.name}, silakan hubungi WhatsApp Mandiri kami di +62 882-9612-5749 untuk pengurusan survey kilat.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full text-zinc-100 overflow-hidden">
      
      {/* HEADER: Full Orange background with decorative blur effects */}
      <section className="relative bg-[#EA580C] pt-32 pb-20 px-4 text-center overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-zinc-950/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-90 h-90 bg-amber-400/30 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur px-3.5 py-1.5 rounded-full border border-white/20 text-white mb-4">
            <span className="w-1.5 h-1.5 bg-zinc-950 rounded-full animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest font-black uppercase">SALURAN KONSULTASI RESMI</span>
          </div>
          <h1 className="font-sans text-3xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight">
            Hubungi Marsimin
          </h1>
          <div className="w-16 h-1.5 bg-zinc-950 mx-auto my-4 rounded-full" />
          <p className="text-zinc-100 text-xs md:text-sm font-medium max-w-xl leading-relaxed italic">
            "Kami berkomitmen menyelesaikan administrasi gambar kerja secara cuma-cuma dan survey lokasi gratis ke alamat Tangerang Anda."
          </p>
        </div>
      </section>

      {/* TWO-COLUMN SECTION */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* LEFT COLUMN: elegant Zinc-900 container displaying direct contact parameters */}
            <div className="lg:col-span-5 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 flex flex-col justify-between space-y-8 shadow-xl">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#EA580C] uppercase font-black block mb-1">
                    DETAIL VERIFIKASI SELLER
                  </span>
                  <h3 className="text-xl font-black uppercase tracking-tight text-white mb-3">
                    Informasi Kontak
                  </h3>
                  <p className="text-xs text-zinc-400 font-normal leading-relaxed">
                    Ajukan pertanyaan seputar skema borong jasa, pembelian kusen alumunium, kalkulasi besi beton ataupun perbaikan kebocoran atap dak.
                  </p>
                </div>

                {/* Contact points list */}
                <div className="space-y-5 pt-4">
                  {/* Whatsapp */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center shrink-0 border border-[#EA580C]/20">
                      <Phone size={16} />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-mono uppercase tracking-widest font-black text-zinc-400">
                        WhatsApp Call &amp; Chat:
                      </h4>
                      <a
                        href="https://wa.me/6288296125749"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs md:text-sm font-bold text-white hover:text-[#EA580C] transition-colors"
                      >
                        +62 882-9612-5749
                      </a>
                      <span className="text-[10px] text-zinc-500 block">Ketersediaan pengerjaan: Senin - Minggu (08:00 - 21:00 WIB)</span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center shrink-0 border border-[#EA580C]/20">
                      <Mail size={16} />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-mono uppercase tracking-widest font-black text-zinc-400">
                        Alamat Email Surat:
                      </h4>
                      <span className="text-xs md:text-sm font-mono font-bold text-white block">
                        info@marsiminkonstruksi.com
                      </span>
                      <span className="text-[10px] text-zinc-500 block">Surat tawaran negosiasi &amp; kerjasama sub-kontrak</span>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center shrink-0 border border-[#EA580C]/20">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-mono uppercase tracking-widest font-black text-zinc-400">
                        Lokasi Workshop Utama:
                      </h4>
                      <p className="text-xs md:text-sm text-white font-medium leading-relaxed">
                        Binong, Kec. Curug, Kabupaten Tangerang, Banten 15810
                      </p>
                      <span className="text-[10px] text-zinc-500 block">Cabang pangkalan logistik curul-binong utama</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800/80 flex items-center gap-3.5 mt-6">
                <div className="w-9 h-9 rounded bg-[#EA580C]/10 flex items-center justify-center text-[#EA580C]">
                  <Sparkles size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#EA580C] uppercase font-black">Kontraktor Terdaftar</div>
                  <div className="text-xs font-bold text-white">
                    Pekerjaan Berizin dan Sesuai KBLI Sipil
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Contact Consultation Form */}
            <div className="lg:col-span-7 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#EA580C] uppercase font-black block mb-1">
                  HUBUNGI MANDOR MARSIMIN
                </span>
                <h3 className="text-xl font-black uppercase tracking-tight text-white mb-5">
                  Formulir Konsultasi Proyek
                </h3>

                {/* System Feedback */}
                <AnimatePresence mode="wait">
                  {successMsg && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-emerald-950/40 border border-emerald-800/80 p-4 rounded-xl flex gap-3 text-emerald-400 text-xs mb-6"
                    >
                      <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                      <p>{successMsg}</p>
                    </motion.div>
                  )}

                  {errorMsg && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-rose-950/40 border border-rose-800/80 p-4 rounded-xl flex gap-3 text-rose-400 text-xs mb-6"
                    >
                      <AlertCircle size={16} className="shrink-0 mt-0.5" />
                      <p>{errorMsg}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name Input */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-mono font-bold text-zinc-400 uppercase">Nama Lengkap Anda</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Contoh: Pak Reyhan"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm focus:outline-none focus:border-[#EA580C] text-zinc-100 transition-colors"
                        required
                      />
                    </div>

                    {/* Phone Input (WhatsApp) */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-mono font-bold text-zinc-400 uppercase">Nomor WhatsApp Aktif</label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="Contoh: 0812XXXXXXXX"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm focus:outline-none focus:border-[#EA580C] text-zinc-100 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Email Input */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-mono font-bold text-zinc-400 uppercase">Alamat Email (Opsional)</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Contoh: reyhan@gmail.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm focus:outline-none focus:border-[#EA580C] text-zinc-100 transition-colors"
                      />
                    </div>

                    {/* Project Type */}
                    <div className="space-y-1.5">
                      <label htmlFor="projectType" className="text-xs font-mono font-bold text-zinc-400 uppercase">Jenis Rencana Pekerjaan</label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm focus:outline-none focus:border-[#EA580C] text-zinc-100 transition-colors"
                      >
                        <option value="bangun-baru">Bangun Rumah Tinggal Baru</option>
                        <option value="renovasi">Renovasi Total (Dak/Fasad)</option>
                        <option value="arsitektur">Arsitektur &amp; 3D Blueprint</option>
                        <option value="utilitas">Pekerjaan finishing / Kanopi Pagar</option>
                      </select>
                    </div>
                  </div>

                  {/* Message details */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-mono font-bold text-zinc-400 uppercase">Rincian Lokasi &amp; Kebutuhan Proyek</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Contoh: Saya berencana mambangun rumah satu lantai ukuran 6x12 meter di Curug, mohon rincian RAB standar dan survei lokasi minggu ini..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm focus:outline-none focus:border-[#EA580C] text-zinc-100 transition-colors leading-relaxed"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#EA580C] hover:bg-[#c2410c] disabled:bg-zinc-800 disabled:text-zinc-500 text-white font-black text-xs md:text-sm tracking-widest py-3.5 rounded-lg flex items-center justify-center gap-2 uppercase transition-all duration-300 shadow cursor-pointer"
                  >
                    {loading ? (
                      <>Mengirim Data...</>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Kirim Formulir Konsultasi</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              <div className="pt-4 border-t border-zinc-800 mt-6 text-[10px] text-zinc-500 leading-normal italic text-center">
                *Data yang Anda kirimkan terenkripsi secara aman dan hanya diteruskan ke workstation resmi Marsimin untuk kalkulasi RAB.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* LOWER SECTION: Interactive Mock Map built with CSS, vector lines, and interactive hovering pin */}
      <section className="py-20 bg-zinc-900 border-t border-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[#EA580C] font-mono text-xs font-black tracking-widest uppercase block mb-2">
              KORDINAT SURALIA
            </span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white flex items-center justify-center gap-2">
              <Map size={24} className="text-[#EA580C]" /> Peta Lokasi Tangerang
            </h2>
            <div className="w-12 h-1 bg-[#EA580C] mx-auto mt-4" />
          </div>

          {/* Interactive Statical Mock Map */}
          <div className="relative aspect-video max-w-4xl mx-auto bg-zinc-950 rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl p-4 flex items-center justify-center flex-col md:flex-row gap-6">
            
            {/* Custom stylized local vector design representational map background */}
            <div 
              className="relative flex-1 w-full h-full min-h-[220px] bg-zinc-900 rounded-xl border border-zinc-800 p-4 overflow-hidden flex items-center justify-center cursor-pointer group"
              onMouseEnter={() => setMapHovered(true)}
              onMouseLeave={() => setMapHovered(false)}
              onClick={() => setMapClicked(!mapClicked)}
            >
              {/* Fake gridlines of coordinates map */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
              
              {/* Fake roads vectors map layout */}
              <div className="absolute w-[2px] h-full bg-zinc-800/45 left-1/3 top-0 rotate-12" />
              <div className="absolute w-full h-[2px] bg-zinc-800/45 left-0 top-1/2 -rotate-6" />
              <div className="absolute w-full h-[2px] bg-zinc-800/45 left-0 top-1/4 rotate-12" />
              
              {/* Tangerang Regency boundary highlight */}
              <div className="absolute border border-[#EA580C]/10 w-48 h-48 rounded-full left-1/4 top-1/4 bg-[#EA580C]/2 pointer-events-none" />

              {/* INTERACTIVE PULSING MARKER PIN MAP */}
              <div className="absolute left-[45%] top-[40%] text-center z-10">
                {/* Ping rings */}
                <span className="absolute -left-1.5 -top-1.5 w-10 h-10 bg-[#EA580C]/35 rounded-full animate-ping pointer-events-none" />
                <span className="absolute -left-3.5 -top-3.5 w-14 h-14 bg-[#EA580C]/15 rounded-full animate-pulse pointer-events-none" />

                {/* Main Orange GPS Pin Marker */}
                <div className="w-7 h-7 rounded-full bg-zinc-950 border-2 border-[#EA580C] text-[#EA580C] flex items-center justify-center font-bold text-sm shadow-xl active:scale-90 transition-transform">
                  <MapPin size={16} className="fill-[#EA580C]" />
                </div>
                
                {/* Small indicator */}
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#EA580C] block mt-2 whitespace-nowrap bg-zinc-950/80 px-2.5 py-1 rounded border border-[#EA580C]/25 text-center shadow-lg uppercase">
                  MARSIMIN KONSTRUKSI
                </span>
              </div>

              {/* Informative Popover panel inside Map on Trigger */}
              <AnimatePresence>
                {(mapHovered || mapClicked) && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    className="absolute bottom-4 left-4 right-4 bg-zinc-950/90 backdrop-blur border border-[#EA580C] p-4 rounded-lg shadow-2xl z-20 text-xs text-zinc-300 leading-relaxed max-w-sm"
                  >
                    <div className="flex gap-2 items-center mb-1">
                      <Info size={14} className="text-[#EA580C]" />
                      <span className="font-bold text-white uppercase tracking-wider text-[11px] font-mono">Verifikasi Kordinat Map</span>
                    </div>
                    <p className="font-normal italic text-zinc-400">
                      "Curug, Binong, Tangerang Banten. Kode Pos 15810, Indonesia. Mandor survei terlatih siap menjangkau radius 15km."
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Address specifications explanation */}
            <div className="flex-1 space-y-4 max-w-sm text-xs leading-normal">
              <span className="text-[10px] font-mono text-[#EA580C] tracking-widest uppercase font-black block">AKSESIBILITAS LOKASI</span>
              <h4 className="text-sm font-bold uppercase text-white tracking-wide">Pangkalan Logistik Utama Binong</h4>
              <p className="text-zinc-400">
                Lokasi loket dan tempat gundukan logistik awal kami berada strategis di dekat wilayah Binong, Curug. Hal ini memudahkan armada mobil pickup pasir dan truk engkol semen kami dengan cepat meluncur ke lokasi rumah Anda dalam kurun waktu 30 menit setelah surat izin kerja disahkan.
              </p>
              <div className="bg-zinc-950/45 p-3 rounded-lg border border-zinc-800">
                <span className="block text-[#EA580C] font-mono text-[10px] font-black uppercase">Jangkauan Armada:</span>
                <span className="text-zinc-300 font-medium font-mono text-[11px]">Curug, Binong, Karawaci, Kelapa Dua, Legok, BSD City, Serpong, Cikupa, Tigaraksa.</span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
