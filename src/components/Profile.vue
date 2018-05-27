<template lang="html">
  <v-app class="secondary">
    <v-container fluid fill-height>
      <v-layout align-center column>
        <v-flex>
          <v-btn round class="my-5" color="error" @click="SignOut">Sign Out</v-btn>
        </v-flex>
        <v-flex xs12 class="mt-5 text-sm-center text-xs-center">
              <card3d class="zoom mb-0 card3d hidden-sm-and-up d-inline-block" style="border-radius:100%; width:20em; height:20em;" :data-image="user.photo">
                <h2 slot="header" class="mb-5 accent--text">{{ user.name }}</h2>
                <p slot="content" class="mb-5">{{ user.email }}</p>
              </card3d>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
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
