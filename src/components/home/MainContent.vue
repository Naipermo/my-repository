<template>

<!--  制作视频网站首页-->
<!--  首页有4个分类，每个分类有一个分类标题，标题下两行，每行五个视频-->
      <video-list></video-list>
</template>

<script>

    import VideoList from "./VideoList";
    export default {
        name: "MainContent",
      components: {VideoList},
      /*data(){
          return{
            id:'',
          }
      }*/
    }
</script>

<style scoped>

</style>
