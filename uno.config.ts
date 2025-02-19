import presetWind3 from '@unocss/preset-wind3';
import presetIcons from '@unocss/preset-icons';
import { defineConfig } from 'unocss';

export default defineConfig({
  presets: [
    presetWind3(),
    presetIcons({ /* options */ }),
  ],
  shortcuts: {
    'bg-axugray': 'bg-#f8fafc'
  }
});