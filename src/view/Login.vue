
<script lang="ts" setup>
import { ref,reactive,toRefs } from 'vue'
import { useRouter } from 'vue-router'
import useLoginStore from '@/store/modules/login'
import axios, { type Method } from 'axios'
import { RowAlign } from 'element-plus';
import type { Universal, UserInfo } from '@/types' // 返回类型自定义

const instance = axios.create({
  baseURL: '/api',
  timeout: 5000,
})
const store = useLoginStore()
const {login,userInfo,clearnUserInfo} = store

// home.getAllCategory()

// 跳转

const router = useRouter();
const toHome = () => router.push({ 
    path:'/home',
    query:{ id:1 } 
}) 




const input = ref('')
var user = reactive({
  username: "",
  password: null
})
function submit(){
  getNewsList()
}
const register = () => {
  router.push("/Register")
}
// 调取api获取数据
const getNewsList = () => {
  const params = {
    username: user.username,
    password: user.password
  }
  instance.request({
    url:'/login',
    method: 'post',
    data:params
  }).then((res:any) => {
    const temp = res.data
    clearnUserInfo(temp)

    



    sessionStorage.setItem('token', res.data.data.token)
    localStorage.setItem('token', res.data.data.token)
    if (res.data.code == 200){
      console.log("toHome");
      
      toHome()
      console.log("成功");
    }
    else{
      console.log("失败");

    }
    
    
  })
}
// onMounted(getNewsList)

// var {code,token,message} = toRefs(userInfo,)


</script>

<template>
<div class="container">
  <el-form
    ref="ruleFormRef"
    status-icon
    label-width="120px"
    class="demo-ruleForm"
  >
  <el-row :gutter="10">
    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
    </el-col>
    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
      <el-input v-model="user.username" placeholder="请输入账号" />
      <el-input
        v-model="user.password"
        type="password"
        placeholder="请输入密码"
        show-password
      />
      
      <div class="but">
        <el-button type="primary" @click="submit" >登录</el-button>
        <el-button type="primary" @click="register" >注册</el-button>
      </div>
        </el-col>
    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
      <br/>
      <br/>

      <br/>


 
    </el-col>
  </el-row>
</el-form>
</div>


  
  


</template>



<style scoped>
.container{
  margin: auto;
  margin-top: 20%;

}
.but{
  margin-top: 2%;
  display: flex;
  justify-content: center;/*垂直居中*/
  align-items: center;/*水平居中*/

}

</style>
