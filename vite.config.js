import { defineConfig } from 'vite';
import fg from 'fast-glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

const inputFiles = fg.sync('./src/*.html').reduce((acc, file) => {
  const name = file.replace('./src/', '').replace('.html', '');
  acc[name] = file;
  return acc;
}, {});

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: inputFiles,
    },
    outDir: '../dist',
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true,
  },
  plugins: [injectHTML(), FullReload(['./src/**/*.html'])],
});
