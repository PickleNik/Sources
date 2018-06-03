import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

export default {
  state: {
    user: null,
    loading: false,
    error: false
  },
  mutations: {
    addBookmark (state, payload) {
      const src = payload.src
      if (state.user.bookmarks.findIndex(source => source === src) >= 0) {
        return null
      } else {
        state.user.bookmarks.push(src)
        state.user.fbKeys[src.link] = payload.fbKey
      }
    },
    removeBookmark (state, payload) {
      const bookmarks = state.user.bookmarks
      bookmarks.splice(bookmarks.findIndex(source => source === payload), 1)
      Reflect.deleteProperty(state.user.fbKeys, payload.link)
    },
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
    addBookmark ({commit, getters}, payload) {
      commit('setLoading', true)
      const user = getters.user
      firebase.database().ref('/users/' + user.id).child('/bookmarks/')
      .push(payload)
      .then(data => {
        commit('setLoading', false)
        payload.todo = true
        commit('addBookmark', {src: payload, fbKey: data.key})
      })
      .catch(error => {
        commit('setLoading', false)
        commit('setError', error)
      })
    },
    removeBookmark ({commit, getters}, payload) {
      commit('setLoading', true)
      const user = getters.user
      if (!user.fbKeys) {
        return
      }
      const fbKey = user.fbKeys[payload.link]
      firebase.database().ref('/users/' + user.id + '/bookmarks/').child(fbKey)
      .remove()
      .then(() => {
        commit('setLoading', false)
        payload.todo = false
        commit('removeBookmark', payload)
      })
      .catch(error => {
        commit('setLoading', false)
        commit('setError', error)
      })
    },
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
              bookmarks: [],
              fbKeys: {}
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
              bookmarks: [],
              fbKeys: {}
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
      commit('setUser', {
        id: payload.uid,
        email: payload.email,
        name: payload.displayName,
        photo: payload.photoURL,
        bookmarks: [],
        fbKeys: {}
      })
    },
    fetchUserData ({commit, getters}) {
      commit('setLoading', true)
      firebase.database().ref('/users/' + getters.user.id + '/bookmarks/').once('value')
      .then(data => {
        const dataPairs = data.val()
        let swappedPairs = {}
        let bookmarks = []
        for (let key in dataPairs) {
          bookmarks.push(dataPairs[key])
          dataPairs[key].todo = true
          swappedPairs[dataPairs[key].link] = key
        }
        const updatedUser = {
          id: getters.user.id,
          email: getters.user.email,
          name: getters.user.name,
          photo: getters.user.photo,
          bookmarks: bookmarks,
          fbKeys: swappedPairs
        }
        commit('setLoading', false)
        commit('setUser', updatedUser)
      })
      .catch(
        error => {
          commit('setLoading', false)
          commit('setError', error)
        }
      )
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
