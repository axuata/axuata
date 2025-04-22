import presetWind3 from '@unocss/preset-wind3'
import {defineConfig, transformerDirectives} from 'unocss'

export default defineConfig({
    presets: [
        presetWind3(),
    ],
    transformers: [
        transformerDirectives(),
    ],
})