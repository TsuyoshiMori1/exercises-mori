import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // Node.js のグローバル変数も追加
        ...globals.jest // Jest のグローバル変数も追加
      }
    }
  },
  pluginJs.configs.recommended,
  // lint対象から除外
  { ignores: ['ex01/format_sample.js', 'ex09/task.flow.js'] }
];
0;
