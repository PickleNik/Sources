<template lang="html">
  <v-app class="secondary">
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
            <v-btn type="submit" class="mb-5" round color="accent" light>Sign {{ signup ? 'Up' : 'In' }}</v-btn>
          </v-layout>
        </form>
        <v-divider class="my-3"></v-divider>

        <div class="altSign">
          <v-btn id="b1" icon flat color="accent"><icon scale="2" name="brands/github"></icon></v-btn>
          <v-btn id="b2" icon flat color="accent"><icon scale="2" name="brands/google"></icon></v-btn>
          <v-btn id="b3" icon flat color="accent"><icon scale="2" name="brands/google-play"></icon></v-btn>
          <v-btn id="b4" icon flat color="accent"><icon scale="2" name="brands/twitter"></icon></v-btn>
          <v-btn id="b5" icon flat color="accent"><icon scale="2" name="brands/facebook-f"></icon></v-btn>
        </div>

      </v-flex>
    </v-layout>
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
  </v-container>
</v-app>
</template>

<script>
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

.altSign #b1{
  opacity: 0;
  animation: rollIn 1s ease 1 forwards;
}
.altSign #b2{
  opacity: 0;
  animation: rollIn 1s ease .2s 1 forwards;
}
.altSign #b3{
  opacity: 0;
  animation: rollIn 1s ease .4s 1 forwards;
}
.altSign #b4{
  opacity: 0;
  animation: rollIn 1s ease .6s 1 forwards;
}
.altSign #b5{
  opacity: 0;
  animation: rollIn 1s ease .8s 1 forwards;
}
</style>
