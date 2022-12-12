<!-- 主页面 -->
<script setup lang="ts">
import MenuVue from '../components/menu/Menu.vue';
import SiteSectionVue from '../components/SiteSection.vue'
import ResponsiveHomeVue from '../components/layout/ResponsiveHome.vue';
import useHomeStore from '@/store/modules/home'

// 接收 store
const store = useHomeStore()
const info = store.info

const getInfo = () =>{
  info()
}
</script>

<template>
  <div class="container">
    <!-- 轮播图组件 -->
    <SiteSectionVue class="site-section-vue"></SiteSectionVue>
  </div>
</template>

<style scoped>
.container{
  flex: auto;
}

</style>
