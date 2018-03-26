<template lang="html">
<div>
  <v-card v-for="source in sources" :key="source.name"
  hover class="src-card d-inline-block ma-3 grey darken-3">

  <a class="primary--text" target="_blank" :href="source.link">
  <v-card-title class="d-inline-block text-xs-center text-sm-center pr-5 pl-5 pb-2">
    {{ source.name }}<v-icon dark class="accent--text ml-1">{{ source.icon }}</v-icon>
  </v-card-title>

    <v-divider></v-divider>

  <div class="pt-3 pb-3">
    <img class="src-logo" :src="source.logo"/>
  </div>
  </a>

    <v-divider></v-divider>

  <v-card-actions class="pr-3 pl-3 ml-2">
  <v-flex>
    <v-btn icon flat light>
      <vue-star color="#222222" animate="rubberBand">
        <div slot="icon" style="user-select:none;cursor:pointer;" @click="source.starred = !source.starred"><v-icon :class="{ 'yellow--text' : source.starred, 'primary--text' : !source.starred }" large>star</v-icon></div>
      </vue-star>
    </v-btn>

    <v-btn icon flat light>
      <vue-star color="#222222" animate="rubberBand">
        <div slot="icon" style="user-select:none;cursor:pointer;" @click="source.todo = !source.todo"><v-icon :class="{ 'accent--text' : source.todo, 'primary--text ' : !source.todo }" large>{{ source.todo ? 'playlist_add_check' : 'playlist_add' }}</v-icon></div>
      </vue-star>
    </v-btn>

    <v-btn icon flat light class="ml-3">
      <vue-star color="#222222" animate="rubberBand">
        <div slot="icon" style="user-select:none;cursor:pointer;" @click="source.shared = !source.shared"><v-icon :class="{ 'light-blue--text' : source.shared, 'primary--text' : !source.shared }" large>shared</v-icon></div>
      </vue-star>
    </v-btn>
  </v-flex>
  </v-card-actions>

  </v-card>
</div>
</template>

<script>
  export default {
    props: ['sources'],
    computed: {
      onShare () {
        document.execCommand('Copy')
      }
    }
  }
  </script>

  <style lang="css">
  .src-logo{
    width:auto;
    max-width:90%;
    height:10em;
    border-radius:3em;
  }
  .src-card{
    transition-duration:2s;
    transition-property: all;
    border-radius:4em;
    width: 20em;
    animation: fadeIn .5s linear 1;
    filter: brightness(97%);
  }
  .src-card:hover{
    transform: translateY(-3px);
    filter: brightness(100%);
  }
</style>
