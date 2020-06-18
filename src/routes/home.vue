<!--
 * @Author: your name
 * @Date: 2020-04-07 20:59:07
 * @LastEditTime: 2020-04-15 20:06:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ssr_pricinple/ssr-technology/src/routes/home.vue
 -->
<!-- Home.vue -->
<template>
  <div>
    home
    <div>{{ homeInfo }}</div>
  </div>
</template>

<script>
export default {
  serverRequest(store) {
    return store.dispatch('getHomeInfo')
  },
  // components: {
  //   child: () => import('~/')
  // },
  mounted() {
  },
  computed: {
    homeInfo() {
      return this.$store.state.homeInfo
    }
  }
}
</script>

<style>
</style>
