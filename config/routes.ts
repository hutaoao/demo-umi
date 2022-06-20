import type {IRoute} from 'umi';

const routes: IRoute[] = [
  {path: '/login', component: '@/pages/login'},
  {
    path: '/', component: '@/layouts', exact: false,
    routes: [
      {path: '/', component: '@/pages/front/home', exact: true},
      {path: '/about', component: '@/pages/front/about', exact: true},
      {path: '/admin', component: '@/pages/back/home', exact: true},
      {path: '/admin/foo', component: '@/pages/back/article', exact: true},
      {component: '@/pages/404'},
    ],
  },
  {component: '@/pages/404'},
]

export default routes;
