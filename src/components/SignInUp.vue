<template lang="html">
  <v-container fluid class="py-5">
    <v-layout>
      <v-flex xs12 sm8 offset-sm2 md4 offset-md4 class="text-xs-center">
        <h1 class="display-1 grey--text my-3">Profile</h1>
        <v-form @submit.prevent="SignUpIn">

           <v-text-field
             autofocus
             v-model="email"
             label="E-mail"
             prepend-icon="email"
             type="email"
             required
           ></v-text-field>

           <v-text-field
             v-model="password"
             label="Password"
             prepend-icon="lock"
             :append-icon="eye ? 'visibility_off' : 'visibility'"
             :append-icon-cb="() => (eye = !eye)"
             :type="eye ? 'password' : 'text'"
             hint="At least 6 characters"
             required
             :loading="signup" >
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
              class="pulse"
              type="password"
              v-if="signup"
              v-model="confirm"
              label="Confirm Password"
              prepend-icon="done_all"
              :rules="[passwordConfirm]"
              clearable
              required>
            </v-text-field>

            <v-layout row>
              <v-btn @click="signup = !signup" outline round color="grey">Sign {{ signup ? 'In' : 'Up' }}</v-btn>
              <v-spacer></v-spacer>
              <v-btn type="submit" class="mb-5" round color="accent" light>Sign {{ signup ? 'Up' : 'In' }}</v-btn>
            </v-layout>

          </v-form>
          <v-divider class="my-3"></v-divider>

        <div>
          <v-btn icon flat color="accent"><icon scale="2" name="brands/github"></icon></v-btn>
          <v-btn icon flat color="accent"><icon scale="2" name="brands/google"></icon></v-btn>
          <v-btn icon flat color="accent"><icon scale="2" name="brands/google-play"></icon></v-btn>
          <v-btn icon flat color="accent"><icon scale="2" name="brands/twitter"></icon></v-btn>
          <v-btn icon flat color="accent"><icon scale="2" name="brands/facebook-f"></icon></v-btn>
          <v-btn icon flat color="accent"><icon scale="2" name="phone"></icon></v-btn>
        </div>

      </v-flex>
    </v-layout>
  </v-container>
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
    }
  },
  computed: {
    passwordConfirm () {
      return this.password !== this.confirm ? 'Passwords do not match' : true
    },
    user () {
      return this.$store.getters.user
    },
    progress () {
      let p = 0
      if ( this.password.length >= 6 ) { p+=25 }
      if ( ( this.password.match(/[a-z]/) ) && ( this.password.match(/[A-Z]/) ) ) { p+=25 }
      if ( this.password.match(/\d+/) ) { p+=25 }
      if ( this.password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/) ) { p+=25 }
      if ( this.password.length >= 10 ) { p+=25 }
      return Math.min(100, p)
    },
    color () {
      return ['error', 'orange', 'warning', 'yellow', 'lime lighten-1', 'accent'][Math.floor(this.progress / 17)]
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
      if (this.signup && this.passwordConfirm) {
        this.$store.dispatch('SignUp', {email: this.email, password: this.password})
      } else if (!this.signup) {
        this.$store.dispatch('SignIn', {email: this.email, password: this.password})
      }
    },

  }
}
</script>

<style scoped>
</style>
