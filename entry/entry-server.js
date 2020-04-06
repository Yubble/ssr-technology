import { createApp } from '../src/main'

export default context => {
  return new Promise((resolve, reject) => {
    const app = createApp()

    // 更改路由
    app.$router.push(context.url)

    // 获取相应路由下的组件
    const matchedComponents = app.$router.getMatchedComponents()

    if (!matchedComponents.length) { return reject({ code: 404 }) }

    console.log('process is ', process.env.NODE_ENV)

    resolve(app)
  })
}
