<template>
  <div
    style="
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    "
  >
    <div style="display: flex; align-items: center">
      <el-tooltip content="展开菜单" placement="right" effect="light">
        <el-icon :size="20" color="#ffffff"
          ><Expand @click="isViewMenu = !isViewMenu"
        /></el-icon>
      </el-tooltip>
      <el-menu
        style="margin-left: 30px; background-color: transparent; height: 40px"
        class="el-menu-demo"
        mode="horizontal"
        background-color="transparent"
        text-color="#fff"
        @select="handleSelect"
        router
      >
        <el-menu-item index="/helloTableSoutable">首页</el-menu-item>
        <el-menu-item index="2">首页</el-menu-item>
      </el-menu>
    </div>
  </div>
  <HelloMenu v-model:showMenu="isViewMenu"></HelloMenu>
</template>

<script lang="ts">
import HelloMenu from "./components/HelloMenu.vue";
export default {
  name: "HelloHeader",
  components: { HelloMenu },
  data() {
    return {
      isViewMenu: false,
    };
  },
  methods: {
    handleSelect(value) {},
  },
};
</script>

<style>
</style>