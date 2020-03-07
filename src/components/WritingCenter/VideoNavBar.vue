<template>
  <div>
    <el-dropdown>
  <span class="el-dropdown-link">
    视频稿件<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>全部</el-dropdown-item>
      <el-dropdown-item>已通过</el-dropdown-item>
      <el-dropdown-item>未通过</el-dropdown-item>
      <el-dropdown-item>审核中</el-dropdown-item>

    </el-dropdown-menu>
  </el-dropdown>
    <el-dropdown>
  <span class="el-dropdown-link">
    视频稿件<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>全部</el-dropdown-item>
        <el-dropdown-item>已通过</el-dropdown-item>
        <el-dropdown-item>未通过</el-dropdown-item>
        <el-dropdown-item>审核中</el-dropdown-item>

      </el-dropdown-menu>
    </el-dropdown>
  </div>


</template>

<script>
    export default {
        name: "VideoNavBar"
    }
</script>

<style scoped>

</style>
