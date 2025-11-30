import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss'; 

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // WAJIB: Atur host ke 0.0.0.0 agar dapat diakses dari luar kontainer Replit
    host: '0.0.0.0', 
    port: 3000, 

    // --- SOLUSI OTOMATIS: Mengizinkan SEMUA HOST (Wildcard) ---
    
    // 1. Mengizinkan semua host untuk koneksi HMR/websocket
    // (Gunakan host: '0.0.0.0' dan port 443 (HTTPS) untuk cloud env)
    hmr: {
        protocol: 'ws',
        clientPort: 443, 
        host: '0.0.0.0',
    },
    
    // 2. Mengizinkan semua host mengakses server (mematikan fitur host blocking Vite)
    allowedHosts: ['*'], // Ini akan memecahkan masalah "Blocked Request"
    
    // 3. Mengizinkan akses File System dari direktori proyek
    fs: {
        allow: ['.'],
    },
    // --------------------------------------------------------------------
  },
});
