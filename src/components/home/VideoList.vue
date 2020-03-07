<template>
  <div>
      <el-row><h4 style="float:left">动画</h4></el-row>
      <el-row>
        <el-col :span="6" v-for="item in video" :key="item.id">
          <router-link :to="'/videodetail/' + item.id">
            <el-card :body-style="{ padding: '0px' }" shadow="never" >
              <!--                图片链接-->
              <el-image :src="item.cover_local" fit="" ></el-image>
              <div style="padding: 14px;">
                <div class="bottom clearfix" style="height: 30px">
                  <!--            视频url地址，点击后要打开新的页面播放视频，加载一个项目内的组件-->
                  <!--              <el-link href="" target="_blank" :underline="false">{{item.title}}</el-link>-->
                  <div>{{item.title}}</div>
                </div>
              </div>
            </el-card>
          </router-link>
        </el-col>
      </el-row>

    <!--<el-row>
        <el-col :span="6" v-for="i in theresource" :key="i.id">
          <el-card :body-style="{ padding: '0px' }" shadow="never" >
            &lt;!&ndash;                图片链接&ndash;&gt;
            <el-image :src="i.cover_local" fit="contain" ></el-image>
            <div style="padding: 14px;">
              <div class="bottom clearfix" style="height: 30px">
                &lt;!&ndash;            视频url地址，点击后要打开新的页面播放视频，加载一个项目内的组件&ndash;&gt;

                <el-link href="" target="_blank" :underline="false">{{i.title}}</el-link>
              </div>
            </div>
          </el-card>
        </el-col>

    </el-row>-->

  </div>
</template>

<script>

    export default {
        name: "VideoList",
        data(){
          return{
            /*videos:{
              id:'',
              title:'',
              cover_local:'',
              type:'',
            },*/
            video:[],
            theresource:[],
            fit:'fill'
          }
        },
        methods:{

        },
        mounted() {
          // post("/1/zerotofourvideos",{发送的数据，用键值对表示key:value})
          this.$axios.get("1/zerotofourvideos").then(res => {
            this.video = res.data
          });
          this.$axios.get("1/fivetoeightvideos").then(res => {
            this.theresource = res.data
          });
        }

    }
</script>

<style scoped>

</style>
