<template>
  <el-container>
    <el-header style="background: linear-gradient(to right, #1890ff, #33ffff)">
      <hello-header></hello-header>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import HelloHeader from "./HelloHeader.vue";
export default {
  name: "layout",
  components: { HelloHeader },
};
</script>

<style>
</style>