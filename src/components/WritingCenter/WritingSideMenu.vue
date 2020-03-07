<template>
  <el-row class="tac">
    <el-col>
      <div>
        <router-link :to="'/writingindex/uploadtest'">
          <i class="el-icon-menu"></i>
          <span>投稿</span>
        </router-link>
      </div>

      <div>
          <router-link :to="'/writingindex/videonavbar'">
            <i class="el-icon-menu"></i>
            <span slot>稿件管理</span>
          </router-link>
      </div>
      <div>
        <router-link :to="'/writingindex/income'">
          <i class="el-icon-menu"></i>
          <span>收益图表</span>
        </router-link>

      </div>
      <div >
        <router-link :to="'/writingindex/writerfrom'">
          <i class="el-icon-menu"></i>
          <span slot>个人信息</span>
        </router-link>
      </div>
    </el-col>
  </el-row>
</template>

<script>
    export default {
        name: "SideMenu",
      methods:{

      }
    }
</script>

<style scoped>

</style>
