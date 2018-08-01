import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import StudyMenu from '@/components/StudyMenu'
import Examination from '@/components/Examination'


Vue.use(BootstrapVue)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StudyMenu',
      component: StudyMenu
  },
  {
    path: '/Examination',
    name: 'Examination',
    component: Examination
  }
  ]
})
