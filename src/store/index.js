import Vue from 'vue'
import Vuex from 'vuex'
import tree from './tree'
import user from './user'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    tree: tree,
    user: user
  }
})
