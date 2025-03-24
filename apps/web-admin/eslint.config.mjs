import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'off', // Отключает ошибки о неиспользуемых переменных
      '@typescript-eslint/no-explicit-any': 'off', // Разрешает использовать `any`
      '@typescript-eslint/no-empty-object-type': 'off', // Отключает ошибки про пустые интерфейсы
      '@typescript-eslint/ban-ts-comment': 'off', // Позволяет использовать @ts-ignore
      'prefer-const': 'off', // Не требует использовать `const` вместо `let`
      '@next/next/no-img-element': 'off', // Разрешает использовать <img> вместо <Image />
      'react-hooks/exhaustive-deps': 'off', // Не требует все зависимости в useEffect
    },
  },
]

export default eslintConfig
