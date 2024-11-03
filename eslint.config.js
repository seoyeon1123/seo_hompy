import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: '@typescript-eslint/parser',
    },
    rules: {
      'no-var': 'error', // var 금지
      'no-multiple-empty-lines': 'error', // 여러 줄 공백 금지
      'no-unused-vars': 'off', // 사용하지 않는 변수 금지
      'no-console': 'error', // 콘솔로그 사용 시 에러
      '@typescript-eslint/no-unused-vars': 'error', // TypeScript에서 사용하지 않는 변수 금지
      'react-hooks/exhaustive-deps': 'off', // react-hooks 의존성 규칙 비활성화
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
