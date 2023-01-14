module.exports = {
  env: {
    es2016: true,
    node: true,
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  overrides: [
  ],
  parserOptions: {
    sourceType: 'module',
    project: [
      './tsconfig.base.json',
      './tsconfig.config.json',
    ],
  },
  rules: {
    indent: [
      'error',
      2,
    ],
    'linebreak-style': [
      'off',
    ],
    quotes: [
      'error',
      'single',
    ],
    semi: [
      'error',
      'always',
    ],
    'max-len': ['error', {
      code: 120,
      ignoreTrailingComments: true,
    },
    ],
  },
  ignorePatterns: [
    'dist/*',
  ],
};
