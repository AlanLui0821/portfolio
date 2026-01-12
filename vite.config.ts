import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages project site: https://alanlui0821.github.io/Portfolio/
  // 'base' must match the repository name (case-sensitive)
  base: '/Portfolio/',
  plugins: [react()],
  build: {
    // Build into 'docs' so GitHub Pages can serve from main/docs
    outDir: 'docs',
  },
})
