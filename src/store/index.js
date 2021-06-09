import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {}
const state = {
  userAgent: ''
}
// getters 只会依赖 state 中的成员去更新
const getters = {
  userAgent: (state) => state.userAgent
}

const mutations = {
  setUserAgent: (state, status) => {
    state.userAgent = status
  }
}

const store = new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
})

export default store
