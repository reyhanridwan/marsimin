/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ProjectDetail, ServiceDetail, Testimonial, FAQItem } from './types';
import { IMAGES } from './constants/images';

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'bangun-baru',
    title: 'Bangun Rumah Baru',
    description: 'Konstruksi bangunan hunian berkualitas premium dari nol. Kami mengawasi setiap tahap secara cermat mulai dari struktur fondasi bawah hingga detail atap demi mewujudkan ketahanan generasi.',
    imageUrl: IMAGES.services.baru,
    features: [
      'Pekerjaan fondasi bore pile & footplat kokoh teruji',
      'Pemasangan dinding bata merah / hebel berstandar tinggi',
      'Struktur beton bertulang kokoh tahan gempa',
      'Pemasangan atap rangka baja ringan profil galvalum SNI',
      'Instalasi kelistrikan & pemipaan air bersertifikasi aman',
      'Garansi pemeliharaan struktural pasca pengerjaan'
    ]
  },
  {
    id: 'renovasi',
    title: 'Renovasi Rumah Total / Parsial',
    description: 'Transformasi mumpuni untuk rumah usang Anda. Baik penambahan lantai (dak), perbaikan kebocoran struktural, tata ruang ulang, hingga renovasi fasad agar lebih tangguh dan modern.',
    imageUrl: IMAGES.services.renovasi,
    features: [
      'Peninggian level lantai & dak cor beton bertulang (dua lantai)',
      'Perbaikan kebocoran atap total & aplikasi pelapis antibocor premium',
      'Penggantian kusen kayu lapuk ke kusen aluminium awet anti rayap',
      'Renovasi fasad tampak depan beraksen estetika modern',
      'Tata ruang ulang (sekat dinding baru, perluasan ruang keluarga)'
    ]
  },
  {
    id: 'arsitektur-interior',
    title: 'Desain Arsitektur & Interior',
    description: 'visualisasi 3D presisi dan cetak blueprint kerja (DED) lengkap. Kami menyelaraskan tata cahaya alami, sirkulasi udara optimal, serta efektivitas ruang yang selaras estetika.',
    imageUrl: IMAGES.services.arsitektur,
    features: [
      'Desain denah 2D fungsional & optimal sirkulasi',
      'Rancangan fasad Visual Render 3D High-Fidelity',
      'Gambar Kerja Detail (DED) komprehensif untuk pengurusan IMB',
      'Custom built-in furniture layout (Lemari, Backdrop TV, Kitchen Set)',
      'Konsultasi material finishing bernilai estetika tinggi'
    ]
  },
  {
    id: 'utilitas-finishing',
    title: 'Pekerjaan Utilitas & Finishing Premium',
    description: 'Sentuhan presisi tinggi pada elemen visual akhir dan sistem utilitas krusial. Pemasangan granit tile presisi tanpa celah berongga dan pemipaan air rapi.',
    imageUrl: IMAGES.services.utilitas,
    features: [
      'Pemasangan granit & marmer besar dengan teknik leveling presisi',
      'Pemasangan plafon gypsum drop ceiling artistik modern',
      'Instalasi sistem pompa air, tangki air & filter air bersih',
      'Pengerjaan cat dinding interior dan eksterior anti jamur & cuaca weatherproof',
      'Pekerjaan besi kanopi, pagar minimalis, dan tangga besi hollow'
    ]
  }
];

export const PROJECTS_DATA: ProjectDetail[] = [
  {
    id: 'project-1',
    title: IMAGES.project1.title,
    description: IMAGES.project1.description,
    challenge: IMAGES.project1.challenge,
    solution: IMAGES.project1.solution,
    beforeUrl: IMAGES.project1.before,
    afterUrl: IMAGES.project1.after,
    gallery: IMAGES.project1.gallery
  },
  {
    id: 'project-2',
    title: IMAGES.project2.title,
    description: IMAGES.project2.description,
    challenge: IMAGES.project2.challenge,
    solution: IMAGES.project2.solution,
    beforeUrl: IMAGES.project2.before,
    afterUrl: IMAGES.project2.after,
    gallery: IMAGES.project2.gallery
  },
  {
    id: 'project-3',
    title: IMAGES.project3.title,
    description: IMAGES.project3.description,
    challenge: IMAGES.project3.challenge,
    solution: IMAGES.project3.solution,
    beforeUrl: IMAGES.project3.before,
    afterUrl: IMAGES.project3.after,
    gallery: IMAGES.project3.gallery
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Bapak H. Syarifudin',
    role: 'Pemilik Rumah Tinggal Curug',
    content: 'Kerja sama dengan Pak Marsimin dan tim sungguh melampaui ekspektasi. Dari tahap galian tanah fondasi hingga pasang keramik granit, pengerjaannya presisi sekali dan tanpa rongga kosong. Hasil rumah dua lantai saya kokoh dan rapi!',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Ibu Dr. Amanda Lestari',
    role: 'Klien Renovasi Total Binong',
    content: 'Renovasi total rumah tua peninggalan orang tua selesai tepat waktu. Solusi struktur baja ringan dan pengaturan lubang void membuat rumah kami sekarang sangat sejuk, terang, tanpa perlu menyalakan AC/lampu di siang hari.',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Bapak Aditya Nugraha',
    role: 'Pemilik Ruko Tangerang',
    content: 'Jarang sekali ada kontraktor yang transparan soal RAB. Pak Marsimin memberikan perhitungan detail, menyarankan alternatif material berkualitas tanpa membebangkan anggaran berlebih. Komunikatif & amanah.',
    rating: 5
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Bagaimana alur kerja awal untuk memulai proyek dengan Marsimin Konstruksi?',
    answer: 'Alur kerja kami dimulai dari Konsultasi Gratis (WhatsApp/Telepon) -> Survey Lokasi di area Tangerang dan sekitarnya -> Pembuatan RAB Kasar hingga Detil -> Tanda Tangan Kontrak Surat Perjanjian Kerja (SPK) -> Mobilisasi Bahan & Pekerja -> pembangunan sesuai timeline yang disepakati.',
    category: 'layanan'
  },
  {
    id: 'faq-2',
    question: 'Berapakah biaya bangun rumah per meter persegi di Marsimin Konstruksi?',
    answer: 'Harga konstruksi berkisar dari Rp 3.500.000,- s/d Rp 4.500.000,-/m² untuk kualitas Standar, Rp 4.500.000,- s/d Rp 5.500.000,-/m² untuk kualitas Medium, dan di atas Rp 5.500.000,-/m² untuk kualitas Premium. Harga ini sangat fleksibel tergantung pada jenis fondasi, tinggi dinding, dan pilihan spesifik penutup lantai/fasad.',
    category: 'biaya'
  },
  {
    id: 'faq-3',
    question: 'Apakah biaya survei lokasi dan konsultasi awal dipungut biaya?',
    answer: 'Sama sekali TIDAK. Layanan survei lokasi pengukuran lahan dan konsultasi awal serta estimasi biaya RAB kasar kami berikan secara GRATIS tanpa komitmen apa pun bagi seluruh warga Tangerang, khususnya di sekitar Binong dan Curug.',
    category: 'biaya'
  },
  {
    id: 'faq-4',
    question: 'Berapa lama waktu pengerjaan pembangunan untuk rumah tinggal biasa?',
    answer: 'Secara umum, rumah satu lantai standar (luas 50-80 m²) memakan waktu 3 sampai 4 bulan. Untuk rumah tingkat dua lantai menengah (luas 100-200 m²) memerlukan waktu berkisar 5 sampai 7 bulan tergantung tingkat kerumitan arsitektural dan cuaca di lapangan.',
    category: 'waktu'
  },
  {
    id: 'faq-5',
    question: 'Apakah ada jaminan garansi retensi setelah serah terima kunci?',
    answer: 'Ya, tentu saja. Komitmen kualitas kami dijamin dengan Masa Retensi (Pemeliharaan) selama 3 bulan untuk perbaikan non-struktural (cat, kebocoran pipa ringan, retak rambut plesteran) dan 1 tahun untuk kekuatan struktur bangunan utama setelah tanggal Berita Acara Serah Terima (BAST).',
    category: 'layanan'
  },
  {
    id: 'faq-6',
    question: 'Apakah Marsimin Konstruksi dapat membantu membuat IMB / PBG dan gambar arsitek?',
    answer: 'Ya, kami menyediakan paket lengkap gambar arsitektur (2D CAD & 3D Render) beserta perhitungan struktur sipil berstempel resmi yang dapat digunakan langsung untuk keperluan proses administrasi pembuatan PBG (Persetujuan Bangunan Gedung) / IMB di Tangerang.',
    category: 'layanan'
  }
];
