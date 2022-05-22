<template>
  <el-table :span-method="objectSpanMethod"></el-table>
</template>
<script lang="ts">
export default {
  name: "HelloTableMerge",
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
    // 那个字段相同  来合并
    mergeAttr: {
      type: String,
      default: "",
    },
  },
  watch: {
    tableData: function () {
      if (this.mergeAttr) {
        this.mergeTableData();
      }
    },
  },
  data() {
    return {
      // 计算数据 那些合并
      tableSpanArr: [],
    };
  },
  methods: {
    // 合并单元格
    objectSpanMethod({ row, column, rowIdex, columnIndex }): void {
      if (columnIndex === 0) {
        const _row: Number = this.tableSpanArr[rowIdex];
        const _col = 1;
        return {
          rowspan: _row,
          colspan: _col,
        };
      }
    },
    // 计算数据  那些满足条件进行合并
    mergeTableData() {
      this.tableSpanArr = [];
      let pos = 0;
      this.tableData.map((item: any, index: any) => {
        if (index == 0) {
          this.tableSpanArr.push(1);
          pos = 0;
        } else {
          if (
            item[this.mergeAttr] === this.tableData[index - 1][this.mergeAttr]
          ) {
            this.tableSpanArr[pos] += 1;
            this.tableSpanArr.push(0);
          } else {
            this.tableSpanArr.push(1);
            pos = index;
          }
        }
      });
    },
  },
};
</script>