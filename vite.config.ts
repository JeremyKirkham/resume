import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// The repo is named "resume", so GitHub Pages serves it from a sub-path:
// https://jeremykirkham.github.io/resume/
// https://vite.dev/config/
export default defineConfig({
  base: '/resume/',
  plugins: [react(), tailwindcss()],
})
