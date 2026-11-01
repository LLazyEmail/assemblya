import docusaurus from '@docusaurus/eslint-plugin';

export default [
  {
    ignores: ['build/**', '.docusaurus/**', 'node_modules/**', 'static/**'],
  },
  {
    files: ['src/**/*.{js,jsx}', 'docusaurus.config.js', 'sidebars.js'],
    plugins: {
      '@docusaurus': docusaurus,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script',
    },
    rules: {
      ...docusaurus.configs.recommended.rules,
    },
  },
];
