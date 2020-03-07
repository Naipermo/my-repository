<template>
  <el-container>
    <el-aside style="width:200px;margin-top:20px">
      <SideMenu></SideMenu>
      <switch></switch>
    </el-aside>
    <el-main>
      <video-list></video-list>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
    import SideMenu from "./SideMenu";
    import VideoList from "./VideoList";
    import VideoDetail from "./VideoDetail";
    export default {
        name: "AppIndex",
      components: {VideoDetail, VideoList, SideMenu}
    }
</script>

<style scoped>

</style>
