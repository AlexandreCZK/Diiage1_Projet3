import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateThemeView from '../views/CreateThemeView.vue'
import JoinAGame from '../views/JoinAGame.vue'
import CreateGame from '../views/CreateGame.vue'
import CreateCard from '../views/CreateCard.vue'
import BoardGame from '../views/BoardGame.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/createTheme',
    name:'CreateThemeView',
    component: CreateThemeView
  },
  {
    path: '/joinAGame',
    name: 'JoinAGame',
    component: JoinAGame
  },
  {
    path: '/createGame',
    name: 'CreateGame',
    component: CreateGame
  },
  {
    path: '/createCard',
    name: 'CreateCard',
    component: CreateCard
  },
  {
    path: '/boardgame/:id',
    name: 'BoardGame',
    component: BoardGame
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
