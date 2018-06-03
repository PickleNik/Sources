<template lang="html">
  <v-app class="background py-5">
    <v-container fluid fill-height>
      <v-layout align-center column>
        <v-flex>
          <v-btn round class="zoom my-3" color="error" @click="SignOut">Sign Out</v-btn>
        </v-flex>
        <v-flex xs12 class="my-5 text-sm-center text-xs-center">
              <card3d class="zoom mb-0 card3d hidden-sm-and-up d-inline-block" style="animation-delay:.5s;border-radius:100%; width:20em; height:20em;" :data-image="user.photo">
                <h2 slot="header" class="mb-5 accent--text">{{ user.name }}</h2>
                <p slot="content" class="mb-5">{{ user.email }}</p>
              </card3d>
        </v-flex>
      </v-layout>
    </v-container>
        <v-flex xs12 sm12 md8 offset-md2 lg8 offset-lg2 class="text-xs-center">
          <h1 class="title--text pt-3">Bookmarks</h1>
          <app-src-card :sources="bookmarks"></app-src-card>
        </v-flex>
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
    },
    bookmarks () {
      return this.$store.getters.user.bookmarks
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
