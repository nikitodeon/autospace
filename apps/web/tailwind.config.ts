import type { Config } from 'tailwindcss'

const config: Config = {
  presets: [
    // Логируем загрузку конфигурации из libs/ui
    console.log('Загружаем конфиг из libs/ui...'),
    require('../../libs/ui/tailwind.config'),
  ],

  // Логируем контент
  content: ['./src/**/*.{ts,tsx}', '../../libs/ui/**/*.{ts,tsx}'],
}

console.log('Конфиг загружен:', config)

console.log(
  'Конфиг из libs/ui://////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////',
  require('../../libs/ui/tailwind.config'),
)

export default config
