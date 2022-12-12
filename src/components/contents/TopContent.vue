<!-- 顶部导航栏 -->
<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
  <!--导航栏-->
  
    <el-menu-item index="0" @click="jump('home')">
      LOGO
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1" @click="jump('home')">	
        主页
    </el-menu-item>
    <el-menu-item index="2" @click="jump('hot')">
        热门
    </el-menu-item>
    <el-menu-item index="3" @click="jump('publish')">
        发布
    </el-menu-item>
    <el-menu-item index="4" @click="jump('login')">
        登录
    </el-menu-item>
<!-- 导航栏菜单 -->
    <el-sub-menu index="2">
      <template #title >个人中心</template>
      <el-menu-item index="11" @click="jump('user')">个人信息</el-menu-item>
      <!-- <el-menu-item index="22" @click="jump('user')">拥有文章</el-menu-item> -->
      <el-menu-item index="2-4" @click="todoLogout">登出</el-menu-item>

      
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import useUserStore from '@/store/modules/user';
import useLoginStore from '@/store/modules/login';

const userStore = useUserStore()
const loginStore = useLoginStore()

const {user} = userStore
const {logout,logoutInfo} = loginStore
let index:string
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  index=key
  console.log(key, keyPath)
}
const router = useRouter()
// jump函数 跳转到指定路由
const jump = (e:String) => {
  if(index=='22'){
    const result = "/"+e
    router.push({
      path:result,
      query:{ toNum:1 }
    }) 
  }else{
    console.log(e);
    const result = "/"+e
    router.push(result) 
  }
  
}
const todoLogout = () => {
  logout(user).then(()=>{
    if (logoutInfo == 200) {
          router.push({
            path: '/login',
          })
          localStorage.clear();
          sessionStorage.clear();
        }
  })
  
}
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
