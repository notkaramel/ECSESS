import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      // See https://daisyui.com/docs/colors/#-2 for inspiration
      // From ECSESS's Canva:
      // #71847d shadowy teal
      // #0a5609 bold forest green
      // #054010 bold and dark forest green
      // #8eab8d light soft green
      // #497b49 greeeeen (a bit pastel-y)
      // #c3ccc3 greenish grey
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
