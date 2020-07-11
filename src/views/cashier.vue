<!--
 * @Author: liuyanbao
 * @Date: 2020-06-18 16:33:10
 * @LastEditTime: 2020-07-11 22:17:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ssr_pricinple/ssr-technology/src/views/cashier.vue
-->
<template>
  <div @click="clickfn">
    this is cashier
  </div>
</template>

<script>
export default {
  methods: {
    clickfn() {
      console.log(133243)
    }
  },
  created() {
    console.log('执行了created')
  },
  mounted() {
    console.log('执行了mounted')
  }
}
</script>

<style lang="less">
</style>
