import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase', // Garante que os nomes das classes usem camelCase
      scopeBehaviour: 'local', // Define o escopo local por padrão
    },
  },
})
