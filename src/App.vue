<!--
 * @Author: your name
 * @Date: 2020-04-07 20:59:07
 * @LastEditTime: 2020-04-07 21:17:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ssr_pricinple/ssr-technology/src/App.vue
 -->
<!-- App.vue -->
<template>
  <div>
    <h2>欢迎来到SSR渲染页面</h2>
    <router-link to="/home">home</router-link>
    <router-link to="/animal">animal</router-link>
    <router-link to="/people">people</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
  }
}
</script>

<style>
</style>
