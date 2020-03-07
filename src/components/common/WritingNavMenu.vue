<template>

  <el-menu class="el-menu-demo" mode="horizontal">
    <el-menu-item><router-link :to="'/writingindex'">创作中心</router-link></el-menu-item>

    <el-menu-item><router-link :to="'/index'">主站</router-link></el-menu-item>
  </el-menu>
</template>

<script>
    export default {
        name: "WritingNavMenu"
    }
</script>

<style scoped>

</style>
