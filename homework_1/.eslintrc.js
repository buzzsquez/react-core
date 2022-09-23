module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prop-types': [0],
    'max-len': ['error', { code: 120 }],
    'react/jsx-no-bind': [0],
    'no-shadow': [0],
    'no-restricted-syntax': [0],
    'guard-for-in': [0],
  },
};
