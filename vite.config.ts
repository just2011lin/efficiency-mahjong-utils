// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'EfficiencyMahjongUtils',
            fileName: 'efficiency-mahjong-utils',
        },
        outDir: 'miniprogram_dist'
    },
})
