import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Pastikan plugin ini sudah terinstal

export default defineConfig({
  plugins: [react()],
  server: {
    // Konfigurasi proxy untuk meneruskan permintaan /storage ke Laravel
    proxy: {
      '/storage': { // Ketika frontend mencoba mengakses /storage/
        target: 'http://127.0.0.1:8000', // Teruskan permintaan ke backend Laravel
        changeOrigin: true, // Penting untuk host virtual
        // Opsional: rewrite path jika URL backend berbeda dengan yang diminta frontend
        // rewrite: (path) => path.replace(/^\/storage/, '/storage'),
      },
    },
  },
});