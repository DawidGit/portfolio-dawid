import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify';
import { config as dotenvConfig } from 'dotenv';
// import copy from 'vite-plugin-copy';

dotenvConfig()
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
		vue(),
		vuetify({ autoImport: true }),
      // copy({
      //     targets: [
      //         { src: 'src/assets/icons', dest: 'dist/assets/icons' }
      //     ]
      // })
          ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
