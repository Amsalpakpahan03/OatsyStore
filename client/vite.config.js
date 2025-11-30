import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    strictPort: true,

    allowedHosts: [
      process.env.REPL_SLUG + "-" +
      process.env.REPL_ID + ".pike.replit.dev"
    ],

    hmr: {
      protocol: 'wss',
      host:
        process.env.REPL_SLUG +
        "-" +
        process.env.REPL_ID +
        ".pike.replit.dev",
    },

    fs: {
      allow: ['.']
    }
  }
});
