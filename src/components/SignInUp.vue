<template lang="html">
  <v-app class="secondary">
    <v-alert
      transition="slide-y-reverse-transition"
      origin="center center"
      color="error"
      style="left: 50%;transform: translateX(-50%);"
      class="secondary--text alert ma-0 pa-1 hidden-xs-only"
      :value="error">
      <v-layout row>
        <v-flex>
          <h3 class="ma-4 d-inline-block">{{ error.message }}</h3>
        </v-flex>
        <v-flex>
          <v-btn fab class="d-inline-block secondary error--text" @click="Close"><v-icon>close</v-icon></v-btn>
        </v-flex>
      </v-layout>
    </v-alert>
    <v-alert
      transition="slide-y-reverse-transition"
      origin="center center"
      color="error"
      style="width: 100%;left:0;"
      class="secondary--text alert ma-0 pa-1 hidden-sm-and-up"
      :value="error">
      <v-layout row>
        <v-flex>
          <h3 class="ma-4 d-inline-block">{{ error.message }}</h3>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex>
          <v-btn fab class="d-inline-block secondary error--text" @click="Close"><v-icon>close</v-icon></v-btn>
        </v-flex>
      </v-layout>
    </v-alert>
    <v-container fluid class="py-5">
      <v-layout>
        <v-flex xs12 sm8 offset-sm2 md4 offset-md4 class="text-xs-center">
          <h1 class="display-1 grey--text my-3">Profile</h1>
          <form @submit.prevent="SignUpIn">
            <v-text-field autofocus
              name="email"
              type="email"
              label="Email"
              v-model="email"
              prepend-icon="email"
              clearable
              required >
            </v-text-field>
            <v-text-field
              name="password"
              :type="eye ? 'password' : 'text'"
              label="Password"
              v-model="password"
              prepend-icon="lock"
              :append-icon="eye ? 'visibility_off' : 'visibility'"
              :append-icon-cb="() => (eye = !eye)"
              :loading="signup"
              required >
              <v-progress-linear
                class="roundXL"
                v-if="signup"
                slot="progress"
                :value="progress"
                :color="color"
                height="2" >
              </v-progress-linear>
            </v-text-field>
            <v-text-field
              name="confirm"
              type="password"
              label="Confirm Password"
              v-model="confirm"
              :rules="confirmRules"
              prepend-icon="done_all"
              class="pulse"
              v-if="signup"
              clearable
              required >
            </v-text-field>
            <v-layout row>
              <v-btn @click="signup = !signup" outline round color="grey">Sign {{ signup ? 'In' : 'Up' }}</v-btn>
              <v-spacer></v-spacer>
              <v-btn type="submit" class="mb-5" round color="accent" light :dark="loading" :loading="loading" :disabled="loading">Sign {{ signup ? 'Up' : 'In' }}</v-btn>
            </v-layout>
          </form>
          <v-divider class="my-3"></v-divider>
          <v-tooltip bottom><span>Sign {{ signup ? 'Up' : 'In' }} with Google</span><v-btn slot="activator" color="accent" icon flat id="b1" @click="GoogleSignIn" ><icon scale="2" name="brands/google"></icon></v-btn></v-tooltip>
          <v-tooltip bottom><span>Sign {{ signup ? 'Up' : 'In' }} with Github</span><v-btn slot="activator" color="accent" icon flat id="b2" @click="GithubSignIn" ><icon scale="2" name="brands/github"></icon></v-btn></v-tooltip>
          <v-tooltip bottom><span>Sign {{ signup ? 'Up' : 'In' }} with Twitter</span><v-btn slot="activator" color="accent" icon flat id="b3" @click="TwitterSignIn" ><icon scale="2" name="brands/twitter"></icon></v-btn></v-tooltip>
          <v-tooltip bottom><span>Sign {{ signup ? 'Up' : 'In' }} with Facebook</span><v-btn slot="activator" color="accent" icon flat id="b4" @click="FacebookSignIn" ><icon scale="2" name="brands/facebook-f"></icon></v-btn></v-tooltip>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import * as firebase from 'firebase'
export default {
  data () {
    return {
      eye: true,
      signup: false,
      email: '',
      password: '',
      confirm: '',
      confirmRules: [
        v => v === this.password || 'Passwords do not match'
      ]
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    progress () {
      let p = 0
      if (this.password.length >= 6) { p += 25 }
      if ((this.password.match(/[a-z]/)) && (this.password.match(/[A-Z]/))) { p += 25 }
      if (this.password.match(/\d+/)) { p += 25 }
      if (this.password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) { p += 25 }
      if (this.password.length >= 10) { p += 25 }
      return Math.min(100, p)
    },
    color () {
      return ['error', 'orange', 'warning', 'yellow', 'lime lighten-1', 'accent'][Math.floor(this.progress / 17)]
    },
    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/profile')
      }
    }
  },
  methods: {
    GithubSignIn () {
      this.$store.dispatch('ProviderSignIn', new firebase.auth.GithubAuthProvider())
    },
    GoogleSignIn () {
      this.$store.dispatch('ProviderSignIn', new firebase.auth.GoogleAuthProvider())
    },
    TwitterSignIn () {
      this.$store.dispatch('ProviderSignIn', new firebase.auth.TwitterAuthProvider())
    },
    FacebookSignIn () {
      this.$store.dispatch('ProviderSignIn', new firebase.auth.FacebookAuthProvider())
    },
    SignUpIn () {
      if (this.signup) {
        this.$store.dispatch('SignUp', {email: this.email, password: this.password})
      } else if (!this.signup) {
        this.$store.dispatch('SignIn', {email: this.email, password: this.password})
      }
    },
    Close () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>

<style scoped>
.alert{
  z-index:99999999999999999999999;
  position: fixed;
  bottom: 0;
  border-top-left-radius: 3em;
  border-top-right-radius: 3em;
}

#b1{
  opacity: 0;
  animation: rollIn 1s ease 1 forwards;
}
#b2{
  opacity: 0;
  animation: rollIn 1s ease .2s 1 forwards;
}
#b3{
  opacity: 0;
  animation: rollIn 1s ease .4s 1 forwards;
}
#b4{
  opacity: 0;
  animation: rollIn 1s ease .6s 1 forwards;
}
</style>
