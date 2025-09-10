import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/PortfolioQA_react_vite_tailwind", 
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
    ],
  },
})