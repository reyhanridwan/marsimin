/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Calculator, House, Layers, ShieldCheck, Phone, Timer, FileSpreadsheet } from 'lucide-react';
import { motion } from 'motion/react';

export default function RabCalculator() {
  const [luas, setLuas] = useState<number>(100);
  const [lantai, setLantai] = useState<number>(2);
  const [material, setMaterial] = useState<'standar' | 'medium' | 'premium'>('medium');

  // Multipliers & base prices Indonesian Rupiah
  const basePrices = {
    standar: 3800000, // Rp 3.8jt / m2
    medium: 4800000,  // Rp 4.8jt / m2
    premium: 6200000   // Rp 6.2jt / m2
  };

  // Multiple floors add structure costs multiplier
  const floorMultipliers: Record<number, number> = {
    1: 1.0,
    2: 1.15, // 15% increase for structural reinforced deck (Dak)
    3: 1.25  // 25% increase for heavy structural floor slab and scaffolding
  };

  const hargaPerMeter = Math.round(basePrices[material] * floorMultipliers[lantai]);
  const totalBiaya = hargaPerMeter * luas;

  // Partial breakdowns in Indonesian Construction standard percentage
  const rincianStruktur = Math.round(totalBiaya * 0.40); // 40%
  const rincianFinishing = Math.round(totalBiaya * 0.35); // 35%
  const rincianAtapPlafon = Math.round(totalBiaya * 0.15); // 15%
  const rincianListrikAir = Math.round(totalBiaya * 0.10); // 10%

  // Project duration estimation logic
  let estimasiDurasiBulan = 3;
  if (luas <= 70) {
    estimasiDurasiBulan = lantai === 1 ? 3 : 4;
  } else if (luas <= 150) {
    estimasiDurasiBulan = lantai === 1 ? 4 : 6;
  } else {
    estimasiDurasiBulan = lantai === 1 ? 6 : 8;
  }

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(num);
  };

  // Generate WhatsApp text for easy consultation
  const waContactHtml = () => {
    const text = `Halo Marsimin Konstruksi,%0ASaya ingin berkonsultasi mengenai pembangunan rumah dengan rincian berikut:%0A- Luas Bangunan: ${luas} m²%0A- Jumlah Lantai: ${lantai} Lantai%0A- Kualitas Material: ${material.toUpperCase()}%0A- Estimasi RAB Kasar: ${formatRupiah(totalBiaya)}%0A%0AMohon bantuan untuk survey lokasi dan konsultasi rinciannya. Terima kasih!`;
    return `https://wa.me/6288296125749?text=${text}`;
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#EA580C]/5 rounded-bl-full pointer-events-none" />

      {/* Header */}
      <div className="md:flex justify-between items-start gap-6 border-b border-zinc-800 pb-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#EA580C]/10 text-[#EA580C] px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase mb-3">
            <Calculator size={12} /> Estimasi Anggaran Mandiri
          </div>
          <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-2">
            Kalkulator RAB Kasar Konstruksi
          </h3>
          <p className="text-zinc-400 text-xs md:text-sm max-w-xl">
            Hitung perkiraan kasar rencana anggaran biaya bangun baru atau renovasi total secara transparan berdasarkan luasan rumah Anda.
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2 items-center text-xs font-mono text-zinc-400 bg-zinc-950 p-3 rounded-lg border border-zinc-800/80">
          <FileSpreadsheet size={16} className="text-[#EA580C]" />
          <span>Metode perhitungan standar SNI Tangerang</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* INPUT PANELS */}
        <div className="lg:col-span-7 space-y-6">
          {/* LUAS BANGUNAN */}
          <div className="bg-zinc-950/40 p-5 rounded-xl border border-zinc-800/80">
            <div className="flex justify-between items-center mb-4">
              <label className="text-sm font-semibold text-zinc-200 flex items-center gap-2">
                <House size={16} className="text-[#EA580C]" />
                Luas Bangunan Aktual
              </label>
              <div className="flex items-center gap-1.5 bg-zinc-900 px-3 py-1 rounded border border-zinc-800">
                <input
                  type="number"
                  value={luas}
                  onChange={(e) => setLuas(Math.max(10, Math.min(1000, Number(e.target.value) || 0)))}
                  className="w-16 bg-transparent text-white font-mono font-bold text-center text-sm focus:outline-none"
                />
                <span className="text-xs text-zinc-400 font-mono">m²</span>
              </div>
            </div>
            
            <input
              type="range"
              min="30"
              max="500"
              step="5"
              value={luas}
              onChange={(e) => setLuas(Number(e.target.value))}
              className="w-full accent-[#EA580C] h-1.5 bg-zinc-800 rounded-lg cursor-pointer my-4"
            />
            <div className="flex justify-between text-[11px] font-mono text-zinc-500">
              <span>Min. 30 m²</span>
              <span>150 m²</span>
              <span>300 m²</span>
              <span>Maks. 500 m²</span>
            </div>
          </div>

          {/* JUMLAH LANTAI */}
          <div className="bg-zinc-950/40 p-5 rounded-xl border border-zinc-800/80">
            <label className="text-sm font-semibold text-zinc-200 flex items-center gap-2 mb-4">
              <Layers size={16} className="text-[#EA580C]" />
              Jumlah Lantai Bangunan
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setLantai(num)}
                  className={`py-3 rounded-lg font-mono font-bold text-sm transition-all border cursor-pointer flex flex-col items-center gap-1 ${
                    lantai === num
                      ? 'bg-[#EA580C] text-white border-[#EA580C] shadow-lg shadow-[#EA580C]/10'
                      : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700'
                  }`}
                >
                  <span>{num} Lantai</span>
                  <span className="text-[9px] font-normal opacity-75">
                    {num === 1 ? 'Fondasi Standar' : num === 2 ? 'Struktur Dak 115%' : 'Struktur Berat 125%'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* KUALITAS MATERIAL */}
          <div className="bg-zinc-950/40 p-5 rounded-xl border border-zinc-800/80">
            <label className="text-sm font-semibold text-zinc-200 flex items-center gap-2 mb-4">
              <ShieldCheck size={16} className="text-[#EA580C]" />
              Kriteria Kualitas Spesifikasi Material
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {(['standar', 'medium', 'premium'] as const).map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setMaterial(level)}
                  className={`p-3.5 rounded-lg text-left transition-all border cursor-pointer hover:border-[#EA580C]/50 ${
                    material === level
                      ? 'bg-zinc-900 border-[#EA580C] text-white shadow-md'
                      : 'bg-zinc-900/50 text-zinc-400 border-zinc-800'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-300">
                      {level}
                    </span>
                    <input
                      type="radio"
                      checked={material === level}
                      readOnly
                      className="accent-[#EA580C]"
                    />
                  </div>
                  <p className="text-[10px] text-zinc-400 leading-normal">
                    {level === 'standar' && 'Bata hebel, keramik Milan, rangka galvalum, cat dasar lokal, kelistrikan standar.'}
                    {level === 'medium' && 'Bata merah, granit 60x60, cat Jotun/mowilex premium, kusen aluminium, sanitari Toto.'}
                    {level === 'premium' && 'Bata merah oven, granit slab/marmer, custom fasad, sanitari Kohler, atap premium.'}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* OUTPUT PANEL / RESULTS */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-zinc-950 p-6 rounded-xl border border-zinc-800/80">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-1">
              ESTIMASI TOTAL BIAYA (RAB)
            </span>
            <div className="text-2xl md:text-3xl font-black text-[#EA580C] font-mono tracking-tight mb-2">
              {formatRupiah(totalBiaya)}
            </div>
            
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 border-b border-zinc-800 pb-4 mb-4">
              <span className="inline-block w-2-h-2 bg-emerald-500 rounded-full animate-ping" />
              <span>Biaya / m²: <strong>{formatRupiah(hargaPerMeter)} / m²</strong></span>
            </div>

            {/* Breakdown Bars */}
            <div className="space-y-3.5 text-xs text-zinc-300 mb-6">
              <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-1">
                Rincian Estimasi Parsial Kerja:
              </div>
              
              {/* Struktur */}
              <div>
                <div className="flex justify-between text-zinc-400 text-[11px] mb-1">
                  <span>Pondasi & Struktur Beton (40%)</span>
                  <span className="font-mono">{formatRupiah(rincianStruktur)}</span>
                </div>
                <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#EA580C] h-full rounded-full" style={{ width: '40%' }} />
                </div>
              </div>

              {/* Finishing */}
              <div>
                <div className="flex justify-between text-zinc-400 text-[11px] mb-1">
                  <span>Finishing Dinding & Lantai (35%)</span>
                  <span className="font-mono">{formatRupiah(rincianFinishing)}</span>
                </div>
                <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-zinc-500 h-full rounded-full" style={{ width: '35%' }} />
                </div>
              </div>

              {/* Atap */}
              <div>
                <div className="flex justify-between text-zinc-400 text-[11px] mb-1">
                  <span>Atap Cor / Rangka & Plafon (15%)</span>
                  <span className="font-mono">{formatRupiah(rincianAtapPlafon)}</span>
                </div>
                <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-zinc-500 h-full rounded-full" style={{ width: '15%' }} />
                </div>
              </div>

              {/* Utilitas */}
              <div>
                <div className="flex justify-between text-zinc-400 text-[11px] mb-1">
                  <span>Instalasi Kelistrikan & Air (10%)</span>
                  <span className="font-mono">{formatRupiah(rincianListrikAir)}</span>
                </div>
                <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-zinc-500 h-full rounded-full" style={{ width: '10%' }} />
                </div>
              </div>
            </div>

            {/* Duration estimation banner */}
            <div className="bg-zinc-900/80 p-3.5 rounded-lg border border-zinc-800/80 flex items-center gap-3.5 mb-6">
              <div className="w-9 h-9 rounded bg-[#EA580C]/10 flex items-center justify-center text-[#EA580C]">
                <Timer size={18} />
              </div>
              <div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase">Estimasi Waktu Kerja</div>
                <div className="text-xs font-bold text-white font-mono">
                  {estimasiDurasiBulan} Bulan Kontrak Efektif
                </div>
              </div>
            </div>
          </div>

          <div>
            <a
              href={waContactHtml()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#EA580C] hover:bg-[#c2410c] text-white text-xs md:text-sm font-bold tracking-wider uppercase py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Phone size={18} />
              <span>Dapatkan Penawaran Resmi WA &rarr;</span>
            </a>
            <p className="text-[9px] text-zinc-500 text-center mt-2.5 italic">
              *RAB di atas merupakan perkiraan kasar awal. Hasil riil ditentukan setelah peninjauan gambar arsitek & survei lokasi di Tangerang.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
