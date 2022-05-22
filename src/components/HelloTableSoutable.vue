<template>
  <el-table
    id="sortableId"
    border
    @header-dragend="headerDragend"
    :data="tableData"
  >
    <el-table-column
      v-for="item in tableColumn"
      :prop="item.prop"
      :label="item.label"
      :width="item.width"
      :key="item.prop"
    />
  </el-table>
</template>
<script>
import sortablejs from "sortablejs";
export default {
  name: "HelloTableSoutable",
  data() {
    return {
      tableColumn: [
        { label: "名称", prop: "name", width: "120" },
        { label: "年龄", prop: "age", width: "120" },
        { label: "性别", prop: "sex", width: "120" },
        { label: "地址", prop: "address", width: "" },
      ],
      tableData: [
        { name: "李", age: "24", sex: "男" },
        { name: "于", age: "19", sex: "女" },
        { name: "王", age: "22", sex: "女" },
        { name: "赵", age: "29", sex: "男" },
        { name: "刘", age: "34", sex: "男" },
      ],
      // 移动列的实例
      newSortablejs: null,
    };
  },
  mounted() {
    this.sortiesTable();
  },
  methods: {
    // 列移动
    sortiesTable() {
      const _this = this;
      this.$nextTick(function () {
        const sorTableEl = document.querySelector(
          "#sortableId .el-table__header-wrapper tr"
        );
        _this.newSortablejs = sortablejs.create(sorTableEl, {
          animation: 180,
          delay: 0,
          onEnd: function (event) {
            const tempHableHeader = JSON.parse(
              JSON.stringify(_this.tableColumn)
            );
            const oldItem = tempHableHeader[event.oldIndex];
            tempHableHeader.splice(event.oldIndex, 1);
            tempHableHeader.splice(event.newIndex, 0, oldItem);
            // 重新给tableColumn赋值   赋空在重新赋值 原因是  如果不这样赋值 在改变列宽后移动不正确
            _this.tableColumn = [];
            _this.$nextTick(() => {
              _this.tableColumn = tempHableHeader;
            });
          },
        });
      });
    },
    // 改变列宽的方法
    headerDragend(newWidth, oldWidth, column, event) {
      // 销毁移动列方法  然后重新赋
      this.newSortablejs.destroy();
      const tempHableHeader = JSON.parse(JSON.stringify(this.tableColumn));
      tempHableHeader.map(function (item) {
        if (item.prop == column.property) {
          item.width = newWidth;
        }
      });
      this.tableColumn = tempHableHeader;
      this.sortiesTable();
    },
  },
};
</script>