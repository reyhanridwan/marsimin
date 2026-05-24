/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Optimizes Cloudinary URL with format: /upload/f_auto,q_auto,w_<width>/
 */
export function optimizeCloudinary(url: string, width: number = 1200): string {
  if (!url) return '';
  // Check if it's already a Cloudinary URL
  if (url.includes('cloudinary.com')) {
    // Replace "/image/upload/q_auto/f_auto/" or "/image/upload/" with optimized parameters correctly without duplication
    if (url.includes('/image/upload/q_auto/f_auto/')) {
      return url.replace('/image/upload/q_auto/f_auto/', `/image/upload/f_auto,q_auto,w_${width}/`);
    } else if (url.includes('/image/upload/')) {
      return url.replace('/image/upload/', `/image/upload/f_auto,q_auto,w_${width}/`);
    }
  }
  return url;
}

export const IMAGES = {
  // Hero slides
  heroSlide1: optimizeCloudinary('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941841/slide2_vlhgia.jpg', 1200),
  heroSlide2: optimizeCloudinary('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941396/john-fornander-Id7u0EkTjBE-unsplash_p7ftfx.jpg', 1200),

  // Layanan Highlight Background/Cover
  serviceHighlightBg: optimizeCloudinary('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941746/naksha-banwao-3ddHcjHmiGw-unsplash_jdslxv.jpg', 1200),

  // Home portfolio before/after
  homeBefore: optimizeCloudinary('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941823/sebastian-herrmann-ysqlsEnWpLg-unsplash_pbv806.jpg', 800),
  homeAfter: optimizeCloudinary('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941801/ronnie-george-S0-e9aITeHc-unsplash_ogymgo.jpg', 800),

  // Project 1
  project1: {
    title: 'Modern Luxury Villa Curug',
    description: 'Pembangunan hunian premium dari nol di area Curug dengan pendekatan modern kontemporer yang memaksimalkan sirkulasi udara alami.',
    challenge: 'Kondisi lahan dengan drainase kurang baik dan struktur tanah berisiko amblas sebagian.',
    solution: 'Pemberian fondasi footplat ganda dan rancangan elevasi lantai dasar setinggi 80cm di atas jalan utama.',
    before: optimizeCloudinary('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941813/sandy-millar-u1KG_wZTnkg-unsplash_kglxsg.jpg', 800),
    after: optimizeCloudinary('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941396/john-fornander-Id7u0EkTjBE-unsplash_p7ftfx.jpg', 800),
    gallery: [
      optimizeCloudinary('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941380/iwood-R5v8Xtc0ecg-unsplash_nfr6rt.jpg', 800),
      optimizeCloudinary('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941776/roberto-nickson-emqnSQwQQDo-unsplash_vrhxtd.jpg', 800),
      optimizeCloudinary('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941755/naksha-banwao-nAFuA8t5K9Y-unsplash_v8sxdy.jpg', 800),
    ]
  },

  // Project 2
  project2: {
    title: 'Minimalist Studio Apartment Binong',
    description: 'Renovasi interior dan arsitektur tempat tinggal minimalis modern untuk efisiensi ruang tingkat tinggi di wilayah Binong.',
    challenge: 'Luas ruang yang terbatas menuntut utilitas serbaguna tanpa membuat ruangan terasa sempit.',
    solution: 'Desain open-space dengan custom built-in furniture berbahan plywood meranti bertekstur hangat.',
    before: optimizeCloudinary('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941769/olek-buzunov-cm-gqu42F20-unsplash_gmblqa.jpg', 800),
    after: optimizeCloudinary('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941852/spacejoy-4xRP0Ajk9ys-unsplash_olxzns.jpg', 800),
    gallery: [
      optimizeCloudinary('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941832/serhat-beyazkaya-ayWgRkCk2sQ-unsplash_whjzpo.jpg', 800),
      optimizeCloudinary('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941380/iwood-R5v8Xtc0ecg-unsplash_nfr6rt.jpg', 800),
      optimizeCloudinary('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941885/zac-gudakov-ztWpwTEx728-unsplash_b2wvie.jpg', 800),
    ]
  },

  // Project 3
  project3: {
    title: 'Classic House Total Renovation Tangerang',
    description: 'Renovasi total rumah tua bergaya klasik tradisional menjadi hunian tropis modern berfasilitas sirkulasi optimal.',
    challenge: 'Struktur atap bocor parah dan pembagian tata ruang lama yang terasa gelap pengap.',
    solution: 'Pembongkaran atap kayu diganti baja ringan, pembuatan high-ceiling void, serta partisi besi kaca modern.',
    before: optimizeCloudinary('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941363/house_decoration_fgbtju.jpg', 800),
    after: optimizeCloudinary('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941867/spacejoy-YI2YkyaREHk-unsplash_t2s8ka.jpg', 800),
    gallery: [
      optimizeCloudinary('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941396/john-fornander-Id7u0EkTjBE-unsplash_p7ftfx.jpg', 800),
      optimizeCloudinary('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941859/spacejoy-9M66C_w_ToM-unsplash_kqkwhw.jpg', 800),
      optimizeCloudinary('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941100/collov-home-design-4_jQL4JCS98-unsplash_borowp.jpg', 800),
    ]
  },

  // Services
  services: {
    baru: optimizeCloudinary('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941841/slide2_vlhgia.jpg', 800),
    renovasi: optimizeCloudinary('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941859/spacejoy-9M66C_w_ToM-unsplash_kqkwhw.jpg', 800),
    arsitektur: optimizeCloudinary('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941852/spacejoy-4xRP0Ajk9ys-unsplash_olxzns.jpg', 800),
    utilitas: optimizeCloudinary('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941346/etienne-girardet-sgYamIzhAhg-unsplash_vvnxjq.jpg', 800),
  },

  // About us
  about: {
    team: optimizeCloudinary('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778941792/ronnakorn-triraganon-IvEYfb-3B70-unsplash_fwhdz6.jpg', 800),
    founder: optimizeCloudinary('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1778943896/15ba0e3c10587844c0e73ad425d1adcd_gedrjd.jpg', 800),
  }
};
