import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Permette di usare @/ invece di scrivere src/
    },
  },
  server: {
    port: 3000, // Avvia il server su http://localhost:3000
    open: true, // Apre il browser automaticamente
  },
  build: {
    outDir: 'dist',
    sourcemap: true, // Migliore debug in produzione
  },
})
