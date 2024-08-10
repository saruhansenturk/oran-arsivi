import LayoutView from '@/views/shared/LayoutView.vue';

export default [
    {
        path: '/',
        component: LayoutView,
        children: [
          {
            path: '',
            name: 'home',
            component: () => import('@/views/HomeView.vue')
          }
        ]
      },
      {
        path: '/aboutme',
        component: LayoutView,
        children: [
          {
            path: '',
            name: 'aboutme',
            component: () => import('@/views/AboutView.vue')
          }
        ]
      }
]