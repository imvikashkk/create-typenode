import eslintPluginTs from '@typescript-eslint/eslint-plugin';
import eslintParserTs from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: eslintParserTs,
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
    plugins: {
      '@typescript-eslint': eslintPluginTs,
    },
    rules: {
  // console policy
  'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],

  // TURN OFF base rule to avoid duplicates
  'no-unused-vars': 'off',

  // Unused vars/params with underscore exceptions
  '@typescript-eslint/no-unused-vars': [
    'warn',
    {
      args: 'after-used',               
      ignoreRestSiblings: true,
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_'
    },
  ],

  '@typescript-eslint/no-non-null-assertion': 'off',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/no-var-requires': 'off',
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/ban-ts-comment': 'error',
  eqeqeq: 'error',
}
  },
];
