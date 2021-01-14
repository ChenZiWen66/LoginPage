<template>
  <div>
    这是一个测试界面
<!--    {{letter}}-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Study'
  // 新的option,所有组件API函数都在此使用，只在初始化时执行一次
  // setup()是组合API中第一个要使用的函数
  // setup () {
  //   const letter = 10
  //   return {
  //     letter
  //   }
  // }
})
</script>

<style scoped>

</style>
