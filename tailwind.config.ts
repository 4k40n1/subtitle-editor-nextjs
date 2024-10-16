import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'custom': {
          100: '#454d66',
          200: '#309975',
          300: '#58b368',
          400: '#dad873',
          500: '#efeeb4',
        },
      },
    },
  },
  plugins: [],
}
export default config
