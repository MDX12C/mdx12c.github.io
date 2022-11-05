import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';
import vue from '@vitejs/plugin-vue';
import { ghPages } from 'vite-plugin-gh-pages';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(), ghPages()],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
});
