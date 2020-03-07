<template>
  <video id="my-video" class="video-js" controls preload="auto" width="640" height="480"
         data-setup="{}">
    <p class="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a web browser that
      <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
    </p>
  </video>
</template>

<script>
  import videojs from 'video.js'
  import 'video.js/dist/video-js.css'
  import 'videojs-flash'
  export default {
    name: 'PlayPageTest',
    data() {
      return {
        videoplay: null,
        type: 'video/x-flv',
        url: 'http://106.12.138.179/video/8757108.flv'
      };
    },
    methods:{
      createvideo(){
        this.videoplay = videojs('my-video');
        this.videoplay.pause();
        const src = this.url;
        const type = this.type;
        this.videoplay.src({src,type});
        this.videoplay.load();
        this.videoplay.play();
      }
    },
    mounted() {
      this.createvideo()
    }

  }
</script>

<style>

</style>
