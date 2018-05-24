<template lang="html">
  <main>
    <v-container fluid fill-height>
      <v-layout align-center column>
        <v-flex>
          <p class="pink--text">*Go away, this page is not ready!</p>
        </v-flex>
        <v-flex>
          <v-btn round color="error" @click="SignOut"><v-icon left>exit_to_app</v-icon>Sign Out</v-btn>
        </v-flex>
        <v-flex xs12 class="mt-5 text-sm-center text-xs-center">

              <card3d class="mt-5 mb-0 card3d hidden-sm-and-up d-inline-block" style="border-radius:100%; width:18em; height:18em;" data-image="https://images.unsplash.com/photo-1512723185835-0700e5069a9a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8d4b1d058305366942842e462844ee7d&auto=format&fit=crop&w=1868&q=80">
                <h1 slot="header" class="mb-5 orange--text"><h4>{{ username }}</h4></h1>
                <p slot="content" class="mb-5">{{ userbio }}</p>
              </card3d>

        </v-flex>
      </v-layout>
    </v-container>
  </main>
</template>

<script>
export default {
  data () {
    return {
      username: 'User_name',
      userbio: 'User_bio',
    }
  },
  methods: {
    SignOut () {
      this.$router.push('/signupin')
      this.$store.dispatch('SignOut')
    }
  }
}
</script>

<style scoped>
</style>
