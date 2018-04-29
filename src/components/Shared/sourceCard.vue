<template lang="html">
<div>
  <v-card light width="230" ripple v-for="source in sources" :key="source.name"
  class="src-card d-inline-block ma-2 grey darken-3">

  <a class="primary--text" target="_blank" :href="source.link">
  <v-card-title class="d-inline-block text-xs-center pb-2">
    {{ source.name }}<v-icon v-if="source.icon" dark class="accent--text ml-1">{{ source.icon }}</v-icon>
  </v-card-title>


  <div class="pt-3 pb-3">
    <img class="src-logo" :src="source.logo"/>
  </div>
  </a>

  <v-card-actions>
    <v-flex>
    <v-btn icon flat light class="ml-3">
      <vue-star style="z-index:0" color="#222222" animate="rubberBand">
        <div slot="icon" style="user-select:none;cursor:pointer;" @click="source.starred = !source.starred"><v-icon :class="{ 'red--text' : source.starred, 'grey--text' : !source.starred }" large>favorite</v-icon></div>
      </vue-star>
    </v-btn>

    <v-btn icon flat light class="ml-2">
      <vue-star style="z-index:0" color="#222222" animate="rubberBand">
        <div slot="icon" style="user-select:none;cursor:pointer;" @click="source.todo = !source.todo"><v-icon :class="{ 'accent--text' : source.todo, 'grey--text ' : !source.todo }" large>{{ source.todo ? 'playlist_add_check' : 'playlist_add' }}</v-icon></div>
      </vue-star>
    </v-btn>

    <v-btn v-clipboard:copy="source.link" icon flat light class="ml-4">
      <vue-star style="z-index:0" color="#222222" animate="rubberBand">
        <div slot="icon" style="user-select:none;cursor:pointer;" @click.once="source.shared = !source.shared, copied = !copied"><v-icon :class="{ 'light-blue--text' : source.shared, 'grey--text' : !source.shared }" large>shared</v-icon></div>
      </vue-star>
    </v-btn>
    </v-flex>
  </v-card-actions>

  </v-card>

  <v-dialog width="500" v-model="copied" style="border-radius:3em;"><v-card class="secondary pa-3 text-xs-center" ><v-card-text class="accent--text display-1">Link have been copied!</v-card-text><v-card-actions><v-btn @click="copied = !copied" outline light round color="accent" class="mx-auto">Ok</v-btn></v-card-actions></v-card></v-dialog>

</div>
</template>

<script>
  export default {
    props: ['sources'],
    data () {
      return {
        copied: false
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
    box-shadow: 0 5px 1em #222;
  }
</style>
