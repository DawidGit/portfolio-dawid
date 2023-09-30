import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
    build: {
        rollupOptions: {
            external: ['.node_modules/cloudmailin'],
        },
    },
    plugins: [vue(), vuetify({ autoImport: true })],
    resolve: {
        alias: {
            '@': new URL('./src', import.meta.url).pathname,
        },
    },
})
