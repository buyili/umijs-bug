import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    {
      path: '/fix-keyboard-whitespace',
      component: '@/pages/fix-keyboard-whitespace/index',
    },
  ],
  fastRefresh: {},
  mfsu: {},
});
