import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss'; 

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Pengaturan ini memastikan server Dev Vite dapat dijangkau di cloud
    host: '0.0.0.0', 
    port: 3000, 

    // --- TAMBAHAN KRITIS UNTUK MENGATASI BLOCKED HOST DI REPLIT ---
    
    // GANTI DENGAN HOST ID TERBARU ANDA JIKA INI TIDAK BERHASIL
    // Cek console untuk ID host yang diblokir saat ini.
    const dynamicHost = '2270acf4-173c-4acb-810c-f462ab055f29-00-1yisk920q8334.sisko.replit.dev';

    // Metode 1: Mengizinkan akses File System dari host spesifik
    fs: {
        allow: [
            '.', // Mengizinkan akses file lokal
            dynamicHost, // Host Replit yang diblokir
        ],
    },
    
    // Metode 2: Mengatur Ulang HMR (Penting untuk cloud env)
    hmr: {
        protocol: 'ws',
        clientPort: 443, // Port default untuk HTTPS
        host: dynamicHost,
    },
    
    // Metode 3: Secara eksplisit izinkan host (Untuk kasus Vite yang sangat ketat)
    allowedHosts: [
        dynamicHost,
    ],
    // --------------------------------------------------------------------
  },
});
