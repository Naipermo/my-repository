<template>
    <div>
      <i class="el-icon-star-off"></i>
      <span>{{video_id}}</span>
      <div>{{$store.state.user.id}}</div>
    </div>
</template>

<script>
    export default {
      name: "Praise",
      props:{
        video_id:Number,
        user_id:Number
      },
      data:{
        return:{

        }
      },
      methods:{
        addpraise(){
          this.$axios.get('/addpraise',{
            video_id:this.videoid,
            user_id:this.$store.state.user.id
          }).then(res => {

          })
        }
      }
    }
</script>

<style scoped>

</style>
