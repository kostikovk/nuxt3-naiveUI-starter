module.exports = {
  root: true,

  env: {
    browser: true,
    node: true
  },

  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: '@typescript-eslint/parser'
  },

  extends: ['plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-essential', 'plugin:prettier/recommended'],

  plugins: ['prettier', '@typescript-eslint'],

  rules: {
    'prettier/prettier': [2],
    'vue/no-multiple-template-root': 0,
    'vue/component-name-in-template-casing': [2, 'PascalCase', { registeredComponentsOnly: false }]
  },

  overrides: [
    {
      files: ['layouts/*.vue', 'pages/**/*.vue'],
      rules: {
        'vue/multi-word-component-names': 0,
        'vue/no-multiple-template-root': 2
      }
    }
  ],

  globals: {
    defineStore: true,
    storeToRefs: true
  }
}
