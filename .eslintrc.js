module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': 0,
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/export': 0,
    'import/default': 0,
    'import/no-named-as-default': 2,
    'react/jsx-filename-extension': [0],
    'react/no-multi-comp': 0,
    'import/no-duplicates': 0,
    'no-unused-vars': 'warn',
    'disable-next-line': 'comma-dangle',
  },
};
