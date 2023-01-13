import Vue from 'vue'
import VueRouter from 'vue-router'

// 配置一级路由
import layout from '@/views/layout.vue'
import detail from '@/views/article-detail.vue'

// 配置二级路由
import article from '@/views/article.vue'
import collect from '@/views/collect.vue'
import like from '@/views/like.vue'
import user from '@/views/user.vue'

Vue.use(VueRouter)

// 配置路由规则
const routes = [
  // 重定向
{ path: '/', redirect:'/layout' },
{ path: '/layout', component: layout , children:[
  { path: '/', redirect: '/article' },
  { path: '/article', component: article },
  { path: '/collect', component:collect },
  { path: '/like', component:like },
  { path: '/user', component:user },
]},
{ path: '/detail', component: detail },
// 声明式导航
{ path: '/detail/:id', component: detail },
]

const router = new VueRouter({
  routes
})

export default router
