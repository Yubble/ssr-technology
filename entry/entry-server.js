/*
 * @Author: your name
 * @Date: 2020-04-07 20:59:07
 * @LastEditTime: 2020-06-18 22:06:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ssr_pricinple/ssr-technology/entry/entry-server.js
 */
import { createApp } from '../src/main'

export default context => {
  return new Promise((resolve, reject) => {
    const app = createApp()
    // 更改路由
    app.$router.push(context.url)

    // 获取相应路由下的组件
    const matchedComponents = app.$router.getMatchedComponents()

    if (!matchedComponents.length) { return reject({ code: 404 }) }

    // 遍历路由下所有的组件，如果有需要服务端渲染的请求，则进行请求
    Promise.all(matchedComponents.map(component => {
      if (component.serverRequest) {
        return component.serverRequest(app.$store)
      }
    })).then(() => {
      context.state = app.$store.state
      resolve(app)
    }).catch(reject)
  })
}
