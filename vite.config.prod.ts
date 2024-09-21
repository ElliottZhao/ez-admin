import { mergeConfig } from 'vite';
import baseConfig from './vite.config';

export default mergeConfig(baseConfig, {
  mode: 'production',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue', 'vue-router', 'pinia', '@vueuse/core', 'mitt'],
        },
      },
    },
    chunkSizeWarningLimit: 2000,
  },
});
