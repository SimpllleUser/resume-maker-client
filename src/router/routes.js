const routes = [
  {
    path: '/',
    name: 'resumes',
    component: () => import('../views/ResumesView.vue'),
  }, {
    path: '/resume',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/template',
    name: 'template',
    component: () => import('../views/TemplateView.vue'),
  }, {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
];

export default routes;
