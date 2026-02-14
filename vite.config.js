import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/dummyweb/', // GitHub Pages: https://toorehann-wq.github.io/dummyweb/
})
