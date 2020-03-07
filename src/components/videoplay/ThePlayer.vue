<template>
  <div class="video">
    <video
      class="video-component"
      ref="videoElement"
      controls
      autoplay
    >Your browser is too old which doesn't support HTML5 video.</video>
  </div>
</template>
<script>
  import flvjs from "flv.js";
  export default {
    name: "ThePlayer",
    props: {
      types: {
        type: String,
        default: 'mp4/flv'
      },
      url: {
        types: String,
        default: 'http://106.12.138.179/video/1788646.flv'
      }
    },
    data() {
      return {
        flvPlayer: null
      };
    },
    watch: {
      url() {
        if (this.flvPlayer) {
          this.flvPlayer.detachMediaElement();
          this.flvPlayer.destroy();
        }
        this.createVideo();
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.createVideo();
      });
    },
    methods: {
      createVideo() {
        const videoElement = this.$refs.videoElement;
        this.flvPlayer = flvjs.createPlayer({
          type: this.types,
          url: this.url
        });
        this.flvPlayer.attachMediaElement(videoElement);
        this.flvPlayer.load();
      }
    }
  };
</script>

<style scoped>
  video{
    margin-top: 20px;
    height: auto;
    width: 700px;
  }
</style>
