<template lang="html">
  <v-container fluid class="py-5">
    <v-layout>
      <v-flex xs12 sm8 offset-sm2 md4 offset-md4 class="text-xs-center">
          <h1 class="display-1 grey--text my-3">Profile</h1>

           <v-text-field
             v-model="email"
             label="E-mail"
             prepend-icon="email"
             color="accent"
             suffix="@gmail.com"
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
              v-if="signup"
              slot="progress"
              :value="progress"
              :color="color"
              height="7" class="roundL">
            </v-progress-linear>
            </v-text-field>
            <v-text-field class="pulse"
              type="password"
              v-if="signup"
              v-model="confirm"
              label="Confirm Password"
              prepend-icon="done_all"
              required >
            </v-text-field>

            <v-spacer></v-spacer>
            <v-btn class="mb-5" round color="accent" light>Sign  {{ signup ? 'Up' : 'In' }}</v-btn>
            <v-divider class="my-3"></v-divider>
            
            <v-btn icon flat color="accent"><icon scale="2" name="phone"></icon></v-btn>
            <v-btn icon flat color="accent"><icon scale="2" name="brands/google"></icon></v-btn>
            <v-btn icon flat color="accent"><icon scale="2" name="brands/google-play"></icon></v-btn>
            <v-btn icon flat color="accent"><icon scale="2" name="brands/facebook-f"></icon></v-btn>
            <v-btn icon flat color="accent"><icon scale="2" name="brands/twitter"></icon></v-btn>
            <v-btn icon flat color="accent"><icon scale="2" name="brands/github"></icon></v-btn>
            <v-btn @click="signup = !signup" outline round color="white">Sign {{ signup ? 'In' : 'Up' }}</v-btn>


      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
  eye: false,
  signup: false,
  email: '',
  confirm: '',
  password: '',
}),
computed: {
  progress () {
    return Math.min(100, this.password.length * 10)
  },
  color () {
    return ['error', 'orange', 'warning', 'yellow', 'lime lighten-1', 'accent'][Math.floor(this.progress / 17)]
  }
}
}
</script>

<style scoped>
</style>
