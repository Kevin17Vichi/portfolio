import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Esto ayuda a que Vite detecte mejor los cambios
    },
    hmr: true, // Asegura que el Hot Module Replacement esté activo
  }
})