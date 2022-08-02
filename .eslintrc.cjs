module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index']
      }
    ]
  },
  overrides: [
    {
      files: ['src/api/**/*.ts'],
      rules: {
        camelcase: 0
      }
    }
  ]
}
