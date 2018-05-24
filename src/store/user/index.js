import * as firebase from 'firebase'

export default {

  state: {
    user: null,
    loading: false,
    error: false
  },

  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = false
    }
  },

  actions: {
    SignUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              bookmarks: []
            }
            commit('setUser', newUser)
            commit('setLoading', false)
          }
        )
        .catch(
          error => {
            console.log(error)
            commit('setLoading', false)
            commit('setError', error)
          }
        )
    },
    SignIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              bookmarks: []
            }
            commit('setUser', newUser)
            commit('setLoading', false)
          }
        )
        .catch(
          error => {
            console.log(error)
            commit('setLoading', false)
            commit('setError', error)
          }
        )
    },
    autoSignIn ({commit}, payload) {
      commit('setUser', {id: payload.uid, bookmarks: []})
    },
    SignOut ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    },
    clearError ({commit}) {
      commit('clearError')
    }
  },

  getters: {
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  }

}
