import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Nav from './components/Shared/Nav.vue'
import { store } from './store'
import VueParticles from 'vue-particles'
import Card3d from './components/Shared/card.vue'
import VueStar from 'vue-star'
import SourceCard from './components/Shared/sourceCard.vue'
import VueClipboard from 'vue-clipboard2'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import * as firebase from 'firebase'
Vue.component('icon', Icon)

Vue.component('vue-star', VueStar)

Vue.component('app-src-card', SourceCard)

Vue.component('app-nav', Nav)

Vue.component('card3d', Card3d)
var VueScrollTo = require('vue-scrollto')

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 333,
  easing: 'ease',
  offset: 0,
  cancelable: true,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

Vue.use(VueClipboard)

Vue.use(VueParticles)

Vue.use(Vuetify, {
  theme: {
    primary: '#eee',
    secondary: '#333',
    accent: '#90ee90',
    error: '#F6546A',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyD34PT-x-4w7_nr5Q74STd187dxwUOeQ-E',
      authDomain: 'tuts-tree.firebaseapp.com',
      databaseURL: 'https://tuts-tree.firebaseio.com',
      projectId: 'tuts-tree',
      storageBucket: 'tuts-tree.appspot.com'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', {id: user.uid, email: user.email, name: user.displayName, photo: user.photoURL, bookmarks: []})
      }
    })
  }
})
