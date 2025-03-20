import type { Config } from 'tailwindcss'
import {
  colorsConfig,
  spacingConfig,
  animationConfig,
  keyframesConfig,
} from './src/styles/config'

// console.log('Загружаю конфиг из libs/ui...')

const config: Config = {
  important: true,
  content: ['./src/components/**/*.{js,ts,jsx,tsx}'],

  theme: {
    colors: colorsConfig,
    extend: {
      ringColor: {
        DEFAULT: colorsConfig.primary.DEFAULT,
      },
      outlineColor: {
        DEFAULT: colorsConfig.primary.DEFAULT,
      },
      borderRadius: {
        DEFAULT: '0',
      },
      spacing: spacingConfig,
      animation: animationConfig,
      keyframes: keyframesConfig,
    },
  },

  plugins: [],
}

// console.log('Конфиг из libs/ui успешно загружен:', config)

export default config
