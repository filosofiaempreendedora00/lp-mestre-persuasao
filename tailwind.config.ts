import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#278ea5',
        'primary-hover': '#1f4287',
        accent: '#177cf9',
        'text-main': '#222222',
        'text-muted': '#545454',
        'navy': '#1a2744',
      },
      fontFamily: {
        serif: ['"IM Fell Double Pica SC"', 'Georgia', 'serif'],
        sans: ['"Open Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'container': '1240px',
      },
      borderRadius: {
        'btn': '30px',
      },
    },
  },
  plugins: [],
}

export default config
