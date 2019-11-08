module.exports = {
  extends: ['plugin:react/recommended', 'prettier'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 'off',
  },
}
