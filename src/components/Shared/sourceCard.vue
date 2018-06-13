<template lang="html">
  <div class="zoom">
    <v-card hover width="230" ripple v-for="source in sources" :key="source.name"
    class="src-card d-inline-block ma-2 primary text-xs-center">
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
          <v-btn icon flat light class="mx-auto" :loading="loading" :disabled="loading">
            <vue-star style="z-index:0" color="#222222" animate="rubberBand">
              <div slot="icon" style="user-select:none;cursor:pointer;" @click="addBookmark(source)"><v-icon :class="{ 'warning--text' : source.todo, 'title--text ' : !source.todo }" large>{{ source.todo ? 'star' : 'star_outline' }}</v-icon></div>
            </vue-star>
          </v-btn>
          <v-btn v-clipboard:copy="source.link" icon flat light class="mx-auto pr-2">
            <vue-star style="z-index:0" color="#222222" animate="rubberBand">
              <div slot="icon" style="user-select:none;cursor:pointer;" @click.once="source.shared = !source.shared"><v-icon :class="{ 'accent--text' : source.shared, 'title--text' : !source.shared }" large>share</v-icon></div>
            </vue-star>
          </v-btn>
        </v-layout>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
  export default {
    props: ['sources'],
    data () {
      return {
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      },
      loading () {
        return this.$store.getters.loading
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

  <style scoped>
  .src-logo{
    width:auto;
    max-width:90%;
    height:7em;
    border-radius:1em;
    filter: drop-shadow(0 0 .1em #555);

  }
  .src-card{
    transition-duration: .5s;
    transition-property: all;
    border-radius:4em;
  }
  .src-card:hover{
    transform: translateY(-5px);
  }
</style>
