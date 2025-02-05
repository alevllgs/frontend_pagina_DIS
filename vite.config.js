import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Definir el entorno basado en el script de ejecución
const mode = process.env.NODE_ENV || "development";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.NODE_ENV": JSON.stringify(mode),
  },
  base: mode === "production" ? "/segun_ejemplo/" : "/",
});
