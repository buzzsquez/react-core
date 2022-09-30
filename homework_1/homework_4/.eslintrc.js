module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react/jsx-runtime',
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
    'no-useless-return': [0],
    'no-else-return': [0],
    'jsx-a11y/no-static-element-interactions': [0],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/button-has-type': [0],
    'lit-a11y/click-events-have-key-events': [0],
    'jsx-a11y/interactive-supports-focus': [0],
    'jsx-a11y/click-events-have-key-events': [0],
    'default-param-last': [0],
  },
};
