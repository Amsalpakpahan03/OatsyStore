import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss'; // Import tailwindcss

export default defineConfig({
  plugins: [react(), tailwindcss()], // Tambahkan tailwindcss sebagai plugin
  server: {
    // Pengaturan penting untuk Cloud Development (Replit, CodeSandbox)
    host: '0.0.0.0', // Mengizinkan akses dari semua host
    port: 3000,      // Atur port ini agar sesuai dengan port backend Anda (Port 3000)

    // Menonaktifkan pemeriksaan ketat terhadap host (penting di lingkungan non-lokal)
    // Ini menyelesaikan error "Blocked host" secara universal.
    hmr: {
        protocol: 'ws',
        clientPort: 443, // Port default HTTPS
    },
    // Menambahkan fs.allow ke direktori root agar dapat membaca semua file proyek
    fs: {
        allow: ['.'],
    },
  },
});