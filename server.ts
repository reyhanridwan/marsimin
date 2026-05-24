/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware for parsing JSON requests
  app.use(express.json());

  // API Routes (Mounted first)
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  app.post('/api/contact', (req, res) => {
    const { name, email, phone, message, origin } = req.body;
    
    // Log receipt on the server
    console.log(`[MARSIMIN BACKEND] Pesan Baru dari ${name}:`);
    console.log(`- WhatsApp/Telp: ${phone}`);
    console.log(`- Email: ${email || '-'}`);
    console.log(`- Topik/Asal: ${origin || 'Form Kontak Utama'}`);
    console.log(`- Detail Pesan: "${message}"`);

    // In a live application, this could trigger an email or direct webhook.
    // We return a high-fidelity Indonesian response.
    res.json({
      success: true,
      message: `Terima kasih Bapak/Ibu ${name}, formulir Anda telah berhasil kami kirimkan ke tim Marsimin Konstruksi Curug. Kami akan menghubungi Anda kembali dalam kurun waktu 1x24 jam melalui WhatsApp di nomor ${phone}.`
    });
  });

  // Serve static assets/SPA using standard Vite logic
  if (process.env.NODE_ENV !== 'production') {
    console.log('[MARSIMIN BACKEND] Menjalankan server dalam mode DEVELOPMENT...');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    console.log('[MARSIMIN BACKEND] Menjalankan server dalam mode PRODUCTION...');
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[MARSIMIN BACKEND] Server aktif di http://localhost:${PORT}`);
  });
}

startServer().catch((error) => {
  console.error('[MARSIMIN BACKEND] Gagal memulai server:', error);
  process.exit(1);
});
