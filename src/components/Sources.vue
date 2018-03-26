<template lang="html">
  <main class="secondary">
    <v-container>
      <v-layout column>
        <v-flex xs12 sm10 offset-sm1>
          <v-card hover ripple v-for="source in sources" class="ma-4 roundXL grey darken-3">
            <v-layout row wrap class="roundXL">
              <v-flex sm2 class="border ">
              <a :href="source.link" target="_blank">
                <v-card-media>
                  <img class="pa-3 roundXXL" style="height:100%;width:100%;" :src="source.logo" alt="">
                </v-card-media>
              </a>
              </v-flex>

              <v-flex sm9 class="pl-3 border">
              <a :href="source.link" target="_blank">
                <v-card-title class="pt-4 grey--text">
                  <h1>{{ source.name }}</h1>
                </v-card-title>
                <v-card-text class="primary--text">
                  {{ source.title }}
                </v-card-text>
              </a>
              </v-flex>

              <v-flex sm1 class="pa-2 border">
                <v-layout column class="hidden-xs-only">
                  <v-btn icon flat light>
                    <vue-star color="#222222" animate="rubberBand">
                      <div slot="icon" style="user-select:none;cursor:pointer;" @click="liked = !liked"><v-icon medium :class="{ 'red--text' : liked, 'grey--text' : !liked }" >{{ liked ? 'favorite' : 'favorite_border' }}</v-icon></div>
                    </vue-star>
                  </v-btn>

                  <v-btn icon flat light>
                    <vue-star color="#222222" animate="rubberBand">
                      <div slot="icon" style="user-select:none;cursor:pointer;" @click="todo = !todo"><v-icon medium :class="{ 'accent--text' : todo, 'grey--text ' : !todo }" >{{ todo ? 'playlist_add_check' : 'playlist_add' }}</v-icon></div>
                    </vue-star>
                  </v-btn>

                  <v-btn icon flat light class="ml-3 pl-2">
                    <vue-star color="#222222" animate="rubberBand">
                      <div slot="icon" style="user-select:none;cursor:pointer;" @click="shared = !shared"><v-icon medium :class="{ 'light-blue--text' : shared, 'grey--text' : !shared }" >shared</v-icon></div>
                    </vue-star>
                  </v-btn>
                </v-layout>
                <v-layout row class="hidden-sm-and-up centerX">
                  <v-btn icon flat light>
                    <vue-star color="#222222" animate="rubberBand">
                      <div slot="icon" style="user-select:none;cursor:pointer;" @click="liked = !liked"><v-icon medium :class="{ 'red--text' : liked, 'grey--text' : !liked }" >{{ liked ? 'favorite' : 'favorite_border' }}</v-icon></div>
                    </vue-star>
                  </v-btn>

                  <v-btn icon flat light>
                    <vue-star color="#222222" animate="rubberBand">
                      <div slot="icon" style="user-select:none;cursor:pointer;" @click="todo = !todo"><v-icon medium :class="{ 'accent--text' : todo, 'grey--text ' : !todo }" >{{ todo ? 'playlist_add_check' : 'playlist_add' }}</v-icon></div>
                    </vue-star>
                  </v-btn>

                  <v-btn icon flat light class="ml-3 pl-2">
                    <vue-star color="#222222" animate="rubberBand">
                      <div slot="icon" style="user-select:none;cursor:pointer;" @click="shared = !shared"><v-icon medium :class="{ 'light-blue--text' : shared, 'grey--text' : !shared }" >shared</v-icon></div>
                    </vue-star>
                  </v-btn>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </main>
</template>

<script>
export default {
  data () {
    return {
      liked: false,
      shared: false,
      todo: false,
      sources:[
        {
          name:'SoloLearn',
          title:'Join the largest community of mobile code learners today',
          link:'https://www.sololearn.com/',
          logo:'https://cdn-images-1.medium.com/max/1200/1*QNimSWsBQxta_xt3XksQaw.png'
        },
        {
          name:'Khanacademy',
          title:'You can learn anything.For free. For everyone. Forever.',
          link:'https://www.khanacademy.org',
          logo:'https://cdn.kastatic.org/images/avatars/svg/leaf-green.svg'
        },
        {
          name:'TreeHouse',
          title:'Learn to code, gain a new skill, get a new job',
          link:'https://teamtreehouse.com/explore',
          logo:'https://davidwalsh.name/demo/treehouse-logo.png'
        },
        {
          name:'Udemy',
          title:'Buy more, save more',
          link:'https://www.udemy.com',
          logo:'https://cdn.worldvectorlogo.com/logos/udemy-1.svg'
        },
        {
          name:'W3schools',
          title:'THE WORLD\'S LARGEST WEB DEVELOPER SITE',
          link:'https://www.w3schools.com/',
          logo:'https://store-images.s-microsoft.com/image/apps.30495.13510798887792718.c58f517f-a070-448d-9f42-44c93b19dcae.05c3b4ed-79d8-4d84-be6d-7d3290f1533e?w=180&h=180&q=60'
        },
        {
          name:'LinkedIn Learning',
          title:'A revolution in learning. The evolution of you. Learn the most in-demand business, tech and creative skills from industry experts -- free for one month.',
          link:'https://www.linkedin.com/learning/',
          logo:'https://lh3.googleusercontent.com/WGnfuvo95Yporu_v1zBaDDpt5RLYh_eM1YMMu56pos4V81Ae2djhMfTPtAI50DhLglT4=w300'
        },
        {
          name:'CodeCademy',
          title:'Whether you\'re writing your first line of code or transforming your career, start with us and get the technical skills you need to skill up and stand out.',
          link:'https://www.codecademy.com/',
          logo:'http://news.codecademy.com/content/images/2017/12/square-logo.001.jpeg'
        }
      ]
    }
  }
}
</script>

<style scoped>
.border{
  border:1px solid #333;
}
.card{
  border-radius:3em;
}
</style>
