<template>
  <div>
    <Player></Player>
    <router-view/>
  </div>

</template>

<script>
    import Player from "../videoplay/Player";
    export default {
        name: "VideoDetail",
      components: {Player}
    }
</script>

<style scoped>

</style>
