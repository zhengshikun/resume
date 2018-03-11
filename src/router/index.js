import Vue from 'vue'
import Router from 'vue-router'
import car1 from '../components/car-1.vue'
import car2 from '../components/car-2.vue'
import car3 from '../components/car-3.vue'
import car4 from '../components/car-4.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'car1',
      component:car1
    },
    {
      path: '/car2',
      name: 'car2',
      component: car2
    },
    {
      path: '/car3',
      name: 'car3',
      component: car3
    },
    {
      path: '/car4',
      name: 'car4',
      component: car4
    }
  ]
})
