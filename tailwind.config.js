import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      // See https://daisyui.com/docs/colors/#-2 for inspiration
      colors: {
        "primary": "#4F784F",
        "secondary": "#BBCFBB",
        "accent": "#82BB82",
        "neutral": "#EFEFEB",
        "content": "#2B512E",
      },
      'container': {
        center: true,
        padding: '1rem',
      },
    }
  },

  plugins: [typography, forms]
};
