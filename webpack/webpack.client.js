/*
 * @Author: liuyanbao
 * @Date: 2020-04-07 21:14:52
 * @LastEditTime: 2020-04-07 21:16:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ssr_pricinple/ssr-technology/webpack/webpack.client.js
 */

const path = require('path');
const projectRoot = path.resolve(__dirname, '..');

module.exports = {
  entry: ['babel-polyfill', path.join(projectRoot, 'entry/entry-client.js')],
  output: {
    path: path.join(projectRoot, 'dist'),
    filename: 'bundle.client.js',
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: projectRoot,
        exclude: /node_modules/,
        options: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.runtime.esm.js'
    }
  }
};
