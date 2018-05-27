<template lang="html">
  <v-app class="secondary py-5">
    <v-container>
      <v-flex xs12 sm8 offset-sm2 md4 offset-md4 class="my-5 text-xs-center">
        <form class="zoom" @submit.prevent="ProceedSignIn">
          <h2 class="grey--text">Log In via Email</h2>
          <v-text-field autofocus solo flat
            name="email"
            type="email"
            label="Email"
            v-model="email"
            prepend-icon="email"
            :rules="emailRules"
            class="my-5"
            style="border-radius: 2em;"
            clearable>
          </v-text-field>
          <v-btn light type="submit" round color="accent">Proceed</v-btn>
        </form>
      </v-flex>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      emailRules: [
        v => {
          return !!v || 'Email cannot be empty'
        },
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Email must be valid'
      ],
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
    ProceedSignIn () {
      this.$store.dispatch('ProceedSignIn', { email: this.email, href: window.location.href })
      .then(
        this.$router.push('/profile')
      )
    }
  }
}
</script>

<style lang="css">
</style>
