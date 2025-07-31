/** @type {import('tailwindcss').Config} */
export const darkMode = 'class';
export const content = ['./index.html', './src/**/*.{js,jsx}'];
export const theme = {
  extend: {
    colors: {
      primary: 'var(--color-primary)',
      success: 'var(--color-success)',
      danger: 'var(--color-danger)',
      background: 'var(--color-bg)',
      text: 'var(--color-text)',
      muted: '#f1f5f9',
      bginput: 'var(--color-bg-input)'
    },
  },
};
export const plugins = [
  require('@tailwindcss/forms'),
];