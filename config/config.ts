import {defineConfig} from 'umi';
import routes from './routes';

export default defineConfig({
  // layout: {},  // 开启 ProLayout
  history: {
    type: 'hash',
  },
  routes: routes,
});
