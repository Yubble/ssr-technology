<!--
 * @Author: your name
 * @Date: 2020-04-07 20:59:07
 * @LastEditTime: 2020-06-18 21:56:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ssr_pricinple/ssr-technology/src/App.vue
 -->
<!-- App.vue -->
<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import payEntry from './mixins/payEnter'
export default {
  mixins: [payEntry],
  mounted() {
  }
}
</script>

<style>
</style>
