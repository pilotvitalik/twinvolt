import Vue from 'vue';
import VueRouter from 'vue-router';
import Common from '../components/Wrapper/Common/Common.vue';
import Home from '../views/MainPage/MainPage.vue';
import Delivery from '../views/Delivery/Delivery.vue';
import ContactUs from '../views/ContactUs/ContactUs.vue';
import Blog from '../views/Blog/Blog.vue';
import RSS from '../views/RSS/RSS.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Common,
    children: [
      { path: '', component: Home },
      { path: 'shipping-returns', component: Delivery },
      { path: 'contact-us', component: ContactUs },
      { path: 'blog', component: Blog },
      { path: 'rss-syndication', component: RSS },
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/MainPage/MainPage.vue'),
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
