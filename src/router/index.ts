import Vue from 'vue';
import Router from 'vue-router';
import store from '../store/store';

import TopFlights from '../views/TopFlights.vue';
import TopWeather from '../views/TopWeather.vue';
import MyFavorites from '../views/MyFavorites.vue';


Vue.use(Router);

class RouteMeta {
  title: string;

constructor({title}: { title: string }) {
  this.title = title;
  }
}


const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'top-flights',
      component: TopFlights,
      meta: new RouteMeta({ title: 'TopFlight' })
      
    },
    {
      path: '/top-weather',
      name: 'top-weather',
      component: TopWeather,
      meta: new RouteMeta({ title: 'TopWeather' })
    },
    {
      path: '/my-favorites',
      name: 'my-favorites',
      component: MyFavorites,
      meta: new RouteMeta({ title: 'MyFavorite' })
    }
  ]
});

// This callback runs before every route change, including on initial load
router.beforeEach((to, from, next) => {

  const routeMeta = to.meta as RouteMeta;
  store.dispatch('topToolbar/changeTitle', routeMeta.title);
  next();
});

export default router;