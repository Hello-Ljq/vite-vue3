<template>
    <el-button>首页</el-button>
</template>
<script lang="ts">
import { ref,getCurrentInstance } from 'vue'
export default {
    name:'helloHome',
    data(){
        return{
            value:'222'
        }
    },
    setup() {
    // @ts-ignore
    // console.log(getCurrentInstance())
  },
}
</script>