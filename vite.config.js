import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base './' permite publicar a pasta dist em qualquer hospedagem estática
export default defineConfig({
  plugins: [vue()],
  base: './',
})
