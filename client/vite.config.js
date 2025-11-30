import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss'; 

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // WAJIB: Host untuk container agar dapat dijangkau
    host: '0.0.0.0', 
    port: 3000, 

    // --- HOST DINAMIS SAAT INI (Diambil dari pesan error Anda) ---
    const dynamicHost = '3cfcb196-0f15-415b-9965-6f9accb864df-00-3bskbehj7jnr6.sisko.replit.dev';

    // Menonaktifkan pemeriksaan host yang ketat (solusi final untuk host blocking)
    disableHostCheck: true, 

    // 1. Konfigurasi HMR (Websockets)
    hmr: {
        protocol: 'wss',
        clientPort: 443, // Port standar HTTPS
        host: dynamicHost,
    },
    
    // 2. Memastikan Vite mengizinkan akses dari host ini (wajib jika wildcard gagal)
    allowedHosts: [
        dynamicHost,
    ],
    
    // 3. Mengizinkan akses File System
    fs: {
        allow: ['.'],
    },
  },
});
