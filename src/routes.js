import {createRouter, createWebHashHistory} from 'vue-router'

import Index from "./pages/Index.vue";
import Descubra from "./pages/Descubra.vue";
import Aluguel from "./pages/Aluguel.vue";


const routes = [
  {path: '/', name: 'index', component: Index},
  {path: '/descubra', name: 'descubra', component: Descubra},
  {path: '/aluguel', name: 'aluguel', component: Aluguel},
]

const router = createRouter({

  history: createWebHashHistory(),
  routes,
})

export default router