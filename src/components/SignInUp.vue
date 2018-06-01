<template lang="html">
  <v-app class="secondary">
    <v-alert
      transition="fade-transition"
      origin="center center"
      color="error"
      style="left: 50%;transform: translateX(-50%);z-index:987654321;"
      class="primaryy--text alert ma-0 pa-1 hidden-xs-only"
      :value="error">
      <v-layout row>
        <v-flex>
          <h3 class="ma-4 d-inline-block">{{ error.message }}</h3>
        </v-flex>
        <v-flex>
          <v-btn fab class="d-inline-block primary error--text" @click="Close"><v-icon>close</v-icon></v-btn>
        </v-flex>
      </v-layout>
    </v-alert>
    <v-alert
      transition="slide-y-reverse-transition"
      origin="center center"
      color="error"
      style="width: 100%;left:0;z-index:987654321;"
      class="primary--text alert ma-0 pa-1 hidden-sm-and-up"
      :value="error">
      <v-layout row>
        <v-flex>
          <h3 class="ma-4 d-inline-block">{{ error.message }}</h3>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex>
          <v-btn fab class="d-inline-block primary error--text" @click="Close"><v-icon>close</v-icon></v-btn>
        </v-flex>
      </v-layout>
    </v-alert>
    <v-container fluid class="py-5">
      <v-flex xs12 sm8 offset-sm2 md4 offset-md4 class="my-5 text-xs-center">
        <h1 class="display-1 grey--text">Profile</h1>
        <form v-if="!sent || error" @submit.prevent="EmailSignIn" class="zoom my-5">
          <v-layout row>
            <v-flex xs10>
              <v-text-field autofocus solo
              name="email"
              type="email"
              label="Email"
              v-model="email"
              :rules="emailRules"
              prepend-icon="email"
              class="secondary lighten-1"
              color="accent"
              style="border-radius: 2em;"
              clearable
              required>
              </v-text-field>
            </v-flex><v-flex xs2>
              <v-btn type="submit" light :color="error ? 'error' : 'accent'" icon><v-icon>exit_to_app</v-icon></v-btn>
            </v-flex>
          </v-layout>
        </form>
        <p class="my-4 white--text" v-if="sent && !error">Confirmation link was sent to: &nbsp;&nbsp;
          <p v-if="sent && !error" class="hidden-sm-and-up grey darken-4 roundXXL pa-1 white--text" style="max-height:60px;font-size:.5em;">{{ this.email }}
            <v-tooltip top><span>Edit Email</span><v-btn slot="activator" icon color="accent" light @click="Resent"><v-icon>edit</v-icon></v-btn></v-tooltip>
            <v-tooltip top><span>Check Inbox</span><v-btn slot="activator" icon color="accent" light :href="'https://'+email"><v-icon>link</v-icon></v-btn></v-tooltip>
          </p>
          <p v-if="sent && !error" class="hidden-xs-only grey darken-4 roundXL pa-1 white--text" style="max-height:4em;">{{ this.email }}
            <v-tooltip bottom><span>Edit Email</span><v-btn slot="activator" icon color="accent" light @click="Resent"><v-icon>edit</v-icon></v-btn></v-tooltip>
            <v-tooltip bottom><span>Check Inbox</span><v-btn slot="activator" icon color="accent" light :href="'https://'+email"><v-icon>link</v-icon></v-btn></v-tooltip>
          </p>
        </p>
        <v-tooltip bottom><span>Log in with Google</span><v-btn slot="activator" color="accent" icon flat id="b1" @click="GoogleSignIn" ><icon scale="2" name="brands/google"></icon></v-btn></v-tooltip>
        <v-tooltip bottom><span>Log in ingn with Github</span><v-btn slot="activator" color="accent" icon flat id="b2" @click="GithubSignIn" ><icon scale="2" name="brands/github"></icon></v-btn></v-tooltip>
        <v-tooltip bottom><span>Log in with Twitter</span><v-btn slot="activator" color="accent" icon flat id="b3" @click="TwitterSignIn" ><icon scale="2" name="brands/twitter"></icon></v-btn></v-tooltip>
        <v-tooltip bottom><span>Log in with Facebook</span><v-btn slot="activator" color="accent" icon flat id="b4" @click="FacebookSignIn" ><icon scale="2" name="brands/facebook-f"></icon></v-btn></v-tooltip>
        <br/><br/><br/><a class="zoom secondary lighten-1 round pa-2" target="_blank" href="https://app.termly.io/document/privacy-policy/cfd2389e-89ab-4341-882a-dd5ed79e213b"><v-icon class="mr-2 accent--text">verified_user</v-icon><span class="contact">Privacy Policy</span></a>
      </v-flex>
    </v-container>
  </v-app>
</template>

<script>
import * as firebase from 'firebase'
export default {
  data () {
    return {
      sent: false,
      email: '',
      emailRules: [
        v => {
          return !!v || 'Email cannot be empty'
        },
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Email must be valid'
      ]
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
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
    Resent () {
      this.sent = false
    },
    EmailSignIn () {
      this.$store.dispatch('EmailSignIn', this.email)
      .then(this.sent = true)
    },
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
    Close () {
      this.$store.dispatch('clearError')
      this.sent = false
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
  animation: rollIn 1s ease .3s 1 forwards;
}
#b2{
  opacity: 0;
  animation: rollIn 1s ease .5s 1 forwards;
}
#b3{
  opacity: 0;
  animation: rollIn 1s ease .7s 1 forwards;
}
#b4{
  opacity: 0;
  animation: rollIn 1s ease .9s 1 forwards;
}
</style>
