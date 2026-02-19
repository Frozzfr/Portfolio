import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // ou "0.0.0.0" si tu veux être explicite
    port: 5173 // tu peux le changer si tu veux
  }
})
