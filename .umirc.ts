import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    {
      path: '/react-weui-import-error/error-page',
      component: '@/pages/react-weui-import-error/error-page/index',
    },
    {
      path: '/react-weui-import-error/fix-page',
      component: '@/pages/react-weui-import-error/fix-page/index',
    },
    {
      path: '/fix-keyboard-whitespace',
      component: '@/pages/fix-keyboard-whitespace/index',
    },
  ],
  fastRefresh: {},
  mfsu: {},
});
