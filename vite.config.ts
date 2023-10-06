import { resolve } from 'path';
import { defineConfig, type PluginOption } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import react from '@vitejs/plugin-react-swc';

const plugins: PluginOption[] = [
  react(),
  createSvgIconsPlugin({
    iconDirs: [resolve(__dirname, './src/assets/icons')],
    symbolId: 'icon-[name]',
  }),
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(ViteImageOptimizer());
}

export default defineConfig({
  plugins,

  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/_variables.scss";`,
      },
    },
  },
});
