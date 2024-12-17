import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/P11_Kasa_OC/",
  plugins: [react()],
  server: {
    host: true,
  }
})