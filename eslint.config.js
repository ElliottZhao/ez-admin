import eslint from '@eslint/js';
import prettierConfig from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';

export default tseslint.config(
  {
    languageOptions: {
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
      },
    },
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  prettierConfig,
);
