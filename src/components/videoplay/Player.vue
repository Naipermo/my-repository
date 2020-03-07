<template>
  <div>
    <video id="my-video" class="video-js" controls preload="auto" width="640" height="480"
           data-setup="{}">
      <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a web browser that
        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
      </p>
    </video>
    <praise :video_id="getid()"></praise>

  </div>

</template>

<script>
  import videojs from 'video.js'
  import 'video.js/dist/video-js.css'
  import 'videojs-flash'
  import Praise from "./Praise";
    export default {
        name: "Player",
      components: {Praise},
      data() {
        return {
          videoplay: null,
          type: 'video/x-flv',
          url: 'http://106.12.138.179/video/',
        };
      },
      methods:{
        createvideo(){
          this.$axios.post("/PlayPage/Detail/"+this.$route.params.id).then(res => {
            this.videoplay = videojs('my-video');
            this.videoplay.pause();
            const src = this.url+res.data.id+'.flv';
            const type = this.type;
            this.videoplay.src({src,type});
            this.videoplay.load();
            this.videoplay.play();
          })
        },
        getid(){
          return Number(this.$route.params.id);
        }
      },
      mounted() {
        this.$nextTick(()=>{
            this.createvideo()
        })
        //console.log("我被挂载了");
      },
      /*created() {
        console.log("我被创建了");
      },
      beforeCreate() {
        console.log("创建之前");
      },*/
      destroyed() {
        // console.log("我被销毁了");
        //组件销毁时，把播放器也销毁。
        this.videoplay.dispose()
      },

      watch:{

      }
    }
</script>

<style scoped>

</style>
