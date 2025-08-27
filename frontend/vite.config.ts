import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
       nanoid: 'nanoid/index.browser.js',
      crypto: 'crypto-browserify',
      stream: 'stream-browserify'
    },
   
  },
    define: {
    global: 'globalThis'
  }
})
