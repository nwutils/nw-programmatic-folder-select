import pluginJs from '@eslint/js';
import tjwBase from 'eslint-config-tjw-base';

export default [
  pluginJs.configs.recommended,
  tjwBase.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2025,
      globals: {
        module: true
      }
    },
    // project specific rules/settings
    rules: {
      'no-var': 'off'
    }
  }
];
