/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  beforeUrl: string;
  afterUrl: string;
  gallery: string[];
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'layanan' | 'biaya' | 'waktu';
}

export interface RabResult {
  luasBangunan: number;
  jumlahLantai: number;
  kualitasMaterial: 'standar' | 'medium' | 'premium';
  estimasiPerMeter: number;
  estimasiTotal: number;
  durasiMinggu: number;
  rincianPondasi: number;
  rincianStruktur: number;
  rincianFinishing: number;
  rincianUtilitas: number;
}
