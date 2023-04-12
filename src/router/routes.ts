const routes: any = [
  { path: '/', component: () => import('../pages/Index.vue'), },
  { path: '/detail/:id', component: import('../pages/Detail.vue'), },
];

export default routes;