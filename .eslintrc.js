module.exports = {
  plugins: ['tailwindcss'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:import/recommended',
    'prettier',
    'plugin:@next/next/recommended',
  ],
  rules: {
    // start pair
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    // end
    '@typescript-eslint/camelcase': [0, { properties: 'never' }],
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': ['warn'],
    // indent: 'off',
    // quotes: 'off',
    // semi: 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
    '@next/next/no-img-element': 'off',
    'react/no-unescaped-entities': 'off',
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
      },
    ],
  },
  globals: {
    React: 'writable',
  },
  settings: {
    tailwindcss: {
      prependCustom: true,
    },
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
    react: {
      version: 'detect',
    },
  },
};
