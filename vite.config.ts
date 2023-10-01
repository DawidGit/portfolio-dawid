import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import envCompatible from "vite-plugin-env-compatible";

export default defineConfig({
    build: {
        rollupOptions: {
            external: ['.node_modules/cloudmailin'],
        logLevel: 'info',
        },
    },
    plugins: [envCompatible(), vue(), vuetify({ autoImport: true })],
    resolve: {
        alias: {
            '@': new URL('./src', import.meta.url).pathname,
        },
    },
})
