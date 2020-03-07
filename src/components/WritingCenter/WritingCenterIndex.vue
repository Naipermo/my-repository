<template>
  <el-container>
    <el-aside>
<!--      侧边栏-->
      <writing-side-menu></writing-side-menu>
      <switch></switch>
    </el-aside>

    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import WritingSideMenu from "./WritingSideMenu";
import UpLoadTest from "./UpLoadTest";
    export default {
        name: "WritingCenterIndex",
      components:{UpLoadTest,WritingSideMenu},
      data() {
        return {

        }
      },
      methods:{

      }
    }
</script>

<style scoped>

</style>
