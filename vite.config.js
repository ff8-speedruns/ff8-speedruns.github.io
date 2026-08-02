import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  // The shared UI package is installed from git (and symlinked during local
  // development), so these can resolve from inside it as well as from here.
  resolve: {
    dedupe: ['react', 'react-dom', '@mantine/core', '@mantine/hooks',
             '@mantine/dropzone', '@tabler/icons-react'],
  },
})
