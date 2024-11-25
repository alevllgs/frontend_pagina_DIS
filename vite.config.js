import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Detectar si estás en desarrollo o en producción
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [react()],
  base: isProduction ? '/segun_ejemplo/' : '/', // Cambia 'segun_ejemplo' por el nombre de tu repositorio
});
