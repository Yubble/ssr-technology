<!--
 * @Author: your name
 * @Date: 2020-04-14 16:56:01
 * @LastEditTime: 2020-04-14 17:00:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ssr_pricinple/ssr-technology/src/components/child.vue
 -->

<template>
  <div>这里是子组件</div>
</template>

<script>
export default {
  serverRequest() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('执行了服务端响应')
        resolve()
      }, 2000)
    })
  }
}
</script>