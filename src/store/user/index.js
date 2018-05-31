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
    EmailSignIn ({commit}, payload) {
      commit('clearError')
      firebase.auth().sendSignInLinkToEmail(payload, { url: 'https://tuts-tree.firebaseapp.com/proceed', handleCodeInApp: true })
      .catch(
        error => {
          commit('setLoading', false)
          commit('setError', error)
        }
      )
    },
    ProceedSignIn ({commit}, payload) {
      commit('clearError')
      firebase.auth().signInWithEmailLink(payload.email, payload.href)
        .then(result => {
          // eslint-disable-next-line
          user => {
            const newUser = {
              id: user.uid,
              email: user.email,
              name: user.displayName,
              photo: user.photoURL,
              bookmarks: []
            }
            commit('setLoading', false)
            commit('setUser', newUser)
          }
        })
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
          }
        )
    },
    ProviderSignIn ({commit}, payload) {
      commit('clearError')
      firebase.auth().signInWithPopup(payload)
        .then(result => {
          // eslint-disable-next-line
          user => {
            const newUser = {
              id: user.uid,
              email: user.email,
              name: user.displayName,
              photo: user.photoURL,
              bookmarks: []
            }
            commit('setLoading', false)
            commit('setUser', newUser)
          }
        })
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
          }
        )
    },
    autoSignIn ({commit}, payload) {
      commit('setUser', payload)
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
