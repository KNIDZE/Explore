import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        background: 'var(--background)',
        darkColor: 'var(--dark-color)',
        lightColor: 'var(--light-color)',
        whiteColor: 'var(--white-color)',
        mainColor: 'var(--main-color)',
        accentColor: 'var(--accent-color)',
        secondaryColor: 'var(--secondary-color)',
      },
    },
    fontFamily: {
      mainFont: ['var(--main-font)', 'sans-serif'],
    },
    borderRadius: {
      none: '0',
      DEFAULT: '6px',
      lg: '30px',
    },
    padding: {
      xs: '5px',
      sm: '10px',
      md: '15px',
      lg: '30px',
      xl: '60px',
    },
    margin: {
      xs: '5px',
      sm: '10px',
      md: '15px',
      lg: '30px',
    },
    extends: {
      width: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
} satisfies Config;
