<template>
  <div
    style="
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    "
  >
    <el-tooltip content="展开菜单" placement="right" effect="light">
      <el-icon :size="20" color="#ffffff"
        ><Expand @click="isViewMenu = !isViewMenu"
      /></el-icon>
    </el-tooltip>
  </div>
  <MenuDrawer v-model:showMenu="isViewMenu"></MenuDrawer>
</template>

<script>
import MenuDrawer from "./components/MenuDrawer.vue";
export default {
  name: "HelloHeader",
  components: { MenuDrawer },
  data() {
    return {
      isViewMenu: false,
    };
  },
};
</script>

<style>
</style>