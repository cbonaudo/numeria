import Vue from 'vue';
import Router from 'vue-router';
import Counter from '@/components/Counter';
import FindNumber from '@/components/FindNumber';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/find-number',
      component: FindNumber,
    },
    {
      path: '/',
      component: Counter,
    },
  ],
  mode: 'history',
});
