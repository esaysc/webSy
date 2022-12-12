import { createRouter, createWebHistory } from 'vue-router'

//通过懒加载引入组件
const Home = () => import('../view/Home.vue') // 主页
const Hot = () => import('../view/Hot.vue') // 热点文章
const Login = () => import('../view/Login.vue') // 登录页
const Publish = () => import('../view/Publish.vue') // 发布页
const Cy = () => import('../view/Cy.vue') // 顶部固定导航栏
const Article = () => import('../view/Article.vue') // 所请求访问的文章
const User = () => import('../view/User.vue') // 用户页

const Register = () => import('../view/Register.vue') // 注册页

//映射关系
const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/cy',
    name: 'Cy',
    component: Cy,
    children: [
      {
        // 当 /user/:id/profile 匹配成功
        // UserProfile 将被渲染到 User 的 <router-view> 内部
        path: '/home',
        name: 'Home',
        component: Home,
      },
      {
        path: '/hot',
        name: 'Hot',
        component: Hot,
      },
      {
        path: '/publish',
        name: 'Publish',
        component: Publish,
      },
      {
        path: '/article',
        name: 'Article',
        component: Article,
      },
      {
        path: '/user',
        name: 'User',
        component: User,
      },
      {
        path: '/register',
        name: 'Register',
        component: Register,
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
]
export default createRouter({
  //将实例暴露出去
  history: createWebHistory(), //设置路由模式
  routes,
})
