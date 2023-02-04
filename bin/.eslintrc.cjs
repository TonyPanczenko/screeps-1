module.exports = {
  root: true,
  env: {
    es2016: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
  ],
  overrides: [
  ],
  parserOptions: {
    sourceType: 'module',
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
    'no-console': ['off'],
  },
};
