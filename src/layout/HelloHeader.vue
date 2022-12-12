<template>
  <div
    style="
      display: flex;
      align-items: center;
      justify-content: space-between;
    "
  >
    <div style="display: flex; align-items: center">
      <div style="color:#ffffff;">HELLO</div>
      <el-menu
        style="margin-left: 30px;height: 40px"
        mode="horizontal"
        background-color="transparent"
        text-color="#333333"
        active-text-color="#ffffff"
        :ellipsis="false"
        :default-active="defaultActive"
        @select="handleSelect"
      >
        <el-menu-item index="helloHome">首页</el-menu-item>
        <el-menu-item index="helloApp">应用</el-menu-item>
      </el-menu>
    </div>
    <div>用户</div>
  </div>
</template>

<script lang="ts">
export default {
  name: "HelloHeader",
  data() {
    return {
      defaultActive:'helloHome'
    };
  },
  methods: {
    handleSelect(value: string) {
      this.$router.push(`/${value}`)
    },
  },
};
</script>

<style>
</style>