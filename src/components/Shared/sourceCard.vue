<template lang="html">
<div>
  <v-card hover width="230" ripple v-for="source in sources" :key="source.name"
  class="src-card d-inline-block ma-2 primary">

  <a class="text--text" target="_blank" :href="source.link">
  <v-card-title class="d-inline-block text-xs-center pb-2">
    {{ source.name }}<v-icon v-if="source.icon" dark class="accent--text ml-1">{{ source.icon }}</v-icon>
  </v-card-title>


  <div class="pt-3 pb-3">
    <img class="src-logo" :src="source.logo"/>
  </div>
  </a>

  <v-card-actions class="px-2">
    <v-layout row>
      <v-btn icon flat light class="mx-auto">
        <vue-star style="z-index:0" color="#222222" animate="rubberBand">
          <div slot="icon" style="user-select:none;cursor:pointer;" @click="source.starred = !source.starred"><v-icon :class="{ 'error--text' : source.starred, 'title--text' : !source.starred }" large>{{ source.starred ? 'favorite' : 'favorite_border' }}</v-icon></div>
        </vue-star>
      </v-btn>

      <v-btn icon flat light class="mx-auto">
        <vue-star style="z-index:0" color="#222222" animate="rubberBand">
          <div slot="icon" style="user-select:none;cursor:pointer;" @click="addBookmark(source)"><v-icon :class="{ 'accent--text' : source.todo, 'title--text ' : !source.todo }" large>{{ source.todo ? 'close' : 'playlist_add' }}</v-icon></div>
        </vue-star>
      </v-btn>

      <v-btn v-clipboard:copy="source.link" icon flat light class="mx-auto pl-4">
        <vue-star style="z-index:0" color="#222222" animate="rubberBand">
          <div slot="icon" style="user-select:none;cursor:pointer;" @click.once="source.shared = !source.shared, copied = !copied"><v-icon :class="{ 'info--text' : source.shared, 'title--text' : !source.shared }" large>shared</v-icon></div>
        </vue-star>
      </v-btn>
    </v-layout>
  </v-card-actions>

  </v-card>

  <v-dialog width="500" v-model="copied" >
    <v-container class="roundXL secondary" align-content-center>
      <v-flex xs12 class="text-xs-center">
        <h1 class="accent--text mb-3">Link Copied!</h1>
        <v-spacer></v-spacer>
        <v-btn @click="copied = !copied" outline light round color="accent" class="mx-auto">Ok</v-btn>
      </v-flex>
    </v-container>
  </v-dialog>

</div>
</template>

<script>
  export default {
    props: ['sources'],
    data () {
      return {
        copied: false
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      }
    },
    methods: {
      addBookmark (source) {
        if (this.user) {
          if (this.user.bookmarks.findIndex(src => src === source) >= 0) {
            this.$store.dispatch('removeBookmark', source)
          } else {
            this.$store.dispatch('addBookmark', source)
          }
        } else {
          return null
        }
      }
    }
  }
  </script>

  <style lang="css">
  .src-logo{
    width:auto;
    max-width:90%;
    height:7em;
    border-radius:1em;
  }
  .src-card{
    transition-duration:.5s;
    transition-property: all;
    border-radius:4em;
  }
  .src-card:hover{
    transform: translateY(-5px);
  }
</style>
