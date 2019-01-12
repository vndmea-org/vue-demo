import Vue from 'vue';
import Router from 'vue-router';
const Index = () => import('@/views/Index.vue');
const Users = () => import('@/views/Users.vue');
const Error = () => import('@/views/Error.vue');
const Test = () => import('@/views/test/Test.vue');
const TestTab = () => import('@/views/test/tab/TestTab.vue');

Vue.use(Router);

export default function createRouter() {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', redirect: '/index' },
      {
        path: '/test',
        component: Test,
        children: [{
          path: '',
          component: TestTab,
        },{
          path: 'tab',
          component: TestTab,
        }]
      },
      {
        path: '/index',
        component: Index,
        meta: {
          title: '$vuetify.indexPageTitle'
        }
      },
      {
        path: '/users',
        component: Users,
        meta: {
          title: '$vuetify.usersPageTitle'
        }
      },
      {
        path: '*',
        component: Error,
        meta: {
          title: '$vuetify.errorPageTitle'
        }
      }
    ]
  });
}
