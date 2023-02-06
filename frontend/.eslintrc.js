module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['react', '@typescript-eslint', 'import', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    camelcase: 'error',
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
    quotes: ['error', 'single'],
    'no-duplicate-imports': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react/jsx-filename-extension': 'off',
    'scss.lint.unknownAtRules': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 'error',
    // 'import/no-extraneous-dependencies': ['error', { peerDependencies: true }],
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  ignorePatterns: ['.eslintrc.js'],
};
