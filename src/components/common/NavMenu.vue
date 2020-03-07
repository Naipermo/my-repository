<template>
  <el-menu
    :default-active="'/index'"
    router
    mode="horizontal"
    background-color="white"
    text-color="#222"
    active-text-color="red"
    style="min-width: 1300px">
    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
      {{item.navItem}}
    </el-menu-item>
    <a href="#nowhere" style="color: #222;float: right;padding: 20px;">更多功能</a>
    <i class="el-icon-menu" style="float:right;font-size: 45px;color: #222;padding-top: 8px"></i>
  </el-menu>
</template>

<script>
    export default {
        name: "NavMenu",
        data(){
          return{
            navList:[
              {name:'/index',navItem:'首页'},
              {name:'/writingindex/uploadtest',navItem:'投稿'},
              {name:'/writingindex',navItem:'创作中心'},
              {name:'/writingindex/writerfrom',navItem:'个人中心'}
            ]
          }
        }
    }
</script>

<style scoped>
  a{
    text-decoration: none;
  }
  span{
    pointer-events: none;
  }
</style>
