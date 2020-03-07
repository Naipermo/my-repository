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
    name: "PlayPage",
    data() {
      return {
        flvPlayer: null,
        videoid:'',
        videopath:''
      };
    },
    watch: {
      url() {
        if (this.flvPlayer) {
          this.flvPlayer.detachMediaElement();
          this.flvPlayer.destroy();
        }
        this.createVideo();
      },
      /*videoid(value){
        this.videopath = 'http://106.12.138.179/'+value+'.flv'
      }*/
    },
    mounted() {
      this.$nextTick(() => {
        // this.getid();
        this.createVideo();
      });
    },
    methods: {
      createVideo() {
        this.$axios.post("/PlayPage/Detail/" + this.$route.params.id).then(res => {

            if (flvjs.isSupported()) {
              const videoElement = this.$refs.videoElement;
              this.flvPlayer = flvjs.createPlayer({
                type: 'video/flv',//flv or rtmp video/x-flv
                url: 'http://106.12.138.179/video/' + res.data.id + '.flv'
              });
              this.flvPlayer.attachMediaElement(videoElement);
              this.flvPlayer.load();
            }
            /*if(flvjs.isSupported()){
              const videoElement = this.$refs.videoElement;
              this.flvPlayer = flvjs.createPlayer({
                type: 'flv',//flv or rtmp
                url: 'http://106.12.138.179/video/'+res.data.id+'.flv'
              });
              this.flvPlayer.attachMediaElement(videoElement);
              this.flvPlayer.load();
            }*/
        })

      },
      getid() {
        this.$axios.post('/PlayPage/Detail/' + this.$route.params.id).then(res => {
          this.videoid = res.id;
        })
      }

    }
  };
</script>
