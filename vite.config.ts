import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      // බ්‍රවුසර් එකට අනවශ්‍ය backend මොඩියුල මෙතැනින් external කරවනු ලබයි
      external: ['node:async_hooks', 'async_hooks'],
    },
  },
});
