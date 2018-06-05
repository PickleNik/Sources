<template lang="html">
  <v-app class="background py-5">
    <v-container fluid fill-height>
      <v-layout align-center column>
        <v-flex>
          <v-btn round class="zoom mt-3 mb-5" color="error" @click="SignOut">Sign Out</v-btn>
        </v-flex>
        <v-flex xs12 class="text-sm-center text-xs-center">
              <card3d class="zoom ma-0 card3d" style="border-radius:100%; width:20em; height:20em;" :data-image="user.photo">
                <h2 slot="header" class="mb-5 accent--text">{{ user.name }}</h2>
                <p slot="content" class="mb-5">{{ user.email }}</p>
              </card3d>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid>

      <v-flex id="folder1" xs12 sm12 md8 offset-md2 lg8 offset-lg2 class="zoom mt-4">
        <v-layout row class="hidden-xs-only">
          <v-flex xs4 class="roundXL secondary" style="border-bottom-left-radius: 0;border-bottom-right-radius: 0;">
            <v-layout row>
              <h2 slot="activator" class="link link--yaku title--text pt-3 pl-3">
                <v-btn class="ma-0 error primary--text mr-2" icon><v-icon>delete</v-icon></v-btn>
                <v-btn class="ma-0 warning primary--text mr-2" icon><v-icon>remove</v-icon></v-btn>
                <v-btn class="ma-0 accent primary--text mr-2" icon><v-icon>edit</v-icon></v-btn>
                <span class="hidden-md-and-down" v-for="letter in 'Folder-1'.split('')">{{ letter }}</span>
              </h2>
            </v-layout>
          </v-flex>
          <v-flex >
            <div class="t t1"></div>
          </v-flex>
        </v-layout>
        <div class="pa-3 mb-3 roundXXL secondary" style="border-top-left-radius:0;">
          <v-flex style="animation-delay:.2s;" class="text-xs-center">
            <app-src-card :sources="bookmarks"></app-src-card>
          </v-flex>
        </div>
      </v-flex>

      <v-flex id="folder2" xs12 sm12 md8 offset-md2 lg8 offset-lg2 class="zoom mt-4">
        <v-layout row class="hidden-xs-only">
          <v-flex xs4 class="roundXL secondary" style="border-bottom-left-radius: 0;border-bottom-right-radius: 0;">
            <v-layout row>
              <h2 slot="activator" class="link link--yaku title--text pt-3 pl-3">
                <v-btn class="ma-0 error primary--text mr-2" icon><v-icon>delete</v-icon></v-btn>
                <v-btn class="ma-0 warning primary--text mr-2" icon><v-icon>remove</v-icon></v-btn>
                <v-btn class="ma-0 accent primary--text mr-2" icon><v-icon>edit</v-icon></v-btn>
                <span class="hidden-md-and-down" v-for="letter in 'Folder-2'.split('')">{{ letter }}</span>
              </h2>
            </v-layout>
          </v-flex>
          <v-flex >
            <div class="t t1"></div>
          </v-flex>
        </v-layout>
        <div class="pa-3 mb-3 roundXXL secondary" style="border-top-left-radius:0;">
          <v-flex style="animation-delay:.2s;" class="text-xs-center">
            <app-src-card :sources="bookmarks.slice(2,10)"></app-src-card>
          </v-flex>
        </div>
      </v-flex>

      <v-flex id="add" xs12 sm12 md8 offset-md2 lg8 offset-lg2 class="zoom mt-4">
          <v-layout row style="animation-delay:.2s;" class="pa-3 mb-3 roundXXL secondary text-align-right">
            <v-text-field dark
            name="Folder Name"
            label="Folder Name"
            prepend-icon="folder"
            class="text--text mx-3"
            color="accent"
            counter="10"
            clearable>
            </v-text-field>
            <v-btn fab large class="ma-0 background text--text"><v-icon>add_circle</v-icon></v-btn>
          </v-layout>
      </v-flex>

      <app-nav :navs="navs"></app-nav>

    </v-container>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      navs: [
        { name: 'Folder 1', href: '#folder1', offset: -33, icon: 'folder' },
        { name: 'Folder 2', href: '#folder2', offset: -33, icon: 'folder' },
        { name: 'Add folder', href: '#add', offset: -33, icon: 'create_new_folder' }
      ]
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
.t {
  display: inline-block;
  width:0; height:0;
  border-radius: 4em;
}
.t1 {
  margin-left: -5.6em;
  margin-bottom: -5.3em;
  transform: rotateZ(45deg);
  border-bottom: 0;
  border-right: solid 4.6em transparent;
  border-left: solid 4.6em transparent;
  border-top: solid 4.6em var(--secondary);
}
#nav{
  position:fixed;
  left:0;
  top:1em;
}
</style>
