import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Read base path from environment variable, fallback to 3d_harsh
const base = process.env.BASE_URL || '/3d_harsh/';

// https://vitejs.dev/config/
export default defineConfig({
  base: base,
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
})
