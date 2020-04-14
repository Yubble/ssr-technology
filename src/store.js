/*
 * @Author: your name
 * @Date: 2020-04-14 15:06:40
 * @LastEditTime: 2020-04-14 15:40:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ssr_pricinple/ssr-technology/src/store.js
 */

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default function createStore() {
  let store = new Vuex.Store({
    state: {
      homeInfo: ''
    },
    actions: {
      getHomeInfo({ commit }) {
        return axios.get('http://localhost:8800/api/getHomeInfo').then(res => {
          commit('setHomeInfo', res.data)
        })
      }
    },
    mutations: {
      setHomeInfo(state, res) {
        state.homeInfo = res
      }
    }
  })

  return store
}
