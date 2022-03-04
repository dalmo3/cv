/* eslint @typescript-eslint/no-var-requires: "off" */
/* eslint-env node */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // theme: { fontFamily: { body: 'ui-sans-serif' } },
  theme: {},
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
