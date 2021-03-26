module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'quotes': [2, 'single', { 'avoidEscape': true }],
    //'vue/script-indent': ['error', 2, { 'baseIndent': 0 }],
    'indent': ['error', 2],
    'semi': ['error', 'always'],
    //'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
