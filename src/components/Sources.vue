<template lang="html">
  <main class="secondary">
    <v-container class="pa-0">
      <v-layout column>
        <v-flex xs12 sm10 offset-sm1>
          <v-card hover ripple v-for="source in sources" class="ma-4 grey darken-3">
            <v-layout row wrap>
              <v-flex sm2 class="border">
              <a :href="source.link" target="_blank">
                <v-card-media>
                  <img class="pa-3 roundXL" style="height:100%;width:100%;" :src="source.logo" alt="">
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
                <v-layout column class="hidden-xs-only" align-content-center>
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
                <v-layout row class="hidden-sm-and-up"  align-content-center>
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

    <app-nav :navs="navs"></app-nav>

  </main>
</template>

<script>
export default {
  data () {
    return {
      liked: false,
      shared: false,
      todo: false,
      navs: [
        { name: 'Paid', href: '#paid', offset: -33, icon: 'attach_money' },
        { name: 'Mobile', href: '#mobile', offset: -33, icon: 'phone_iphone' },
        { name: 'YouTube', href: '#youtube', offset: -33, icon: 'video_library' },
        { name: 'Docs', href: '#docs', offset: -33, icon: 'library_books' },
        { name: 'Other', href: '#other', offset: -33, icon: 'library_add' }
      ],
      sources:[
        {
          name:'SoloLearn',
          title:'Join the largest community of mobile code learners today',
          link:'https://www.sololearn.com/',
          logo:'https://cdn-images-1.medium.com/max/1200/1*QNimSWsBQxta_xt3XksQaw.png'
        },
        {
          name:'Py',
          title:'Advance your career.Learn in-demand skills with free interactive courses.',
          link:'https://www.getpy.com/',
          logo:'https://lh3.googleusercontent.com/QJn_8hG4PzDQ1JIiTrRkulyNUk3oMstwjCANkGnur8Xb8W8Em_yKoI6-IU2FYujofQ=w300'
        },
        {
          name:'Mimo',
          title:'Mimo is an app that teaches computer science in a fun and interactive way',
          link:'https://getmimo.com/',
          logo:'https://cdn-images-1.medium.com/max/1200/1*-jl0bB0xBBCypqT07hoPwA.png'
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
          name:'Code School',
          title:'Learn. Practice. Win. The interactive learning destination for aspiring and experienced developers.',
          link:'https://www.codeschool.com/',
          logo:'https://www.codeschool.com/assets/pages/brand/downloads/brand-mark-47100518b9ef3c7d41cb081576451d74f8ce24b4cc6f7948cb6913f84da3072d.png'
        },
        {
          name:'W3schools',
          title:'THE WORLD\'S LARGEST WEB DEVELOPER SITE',
          link:'https://www.w3schools.com/',
          logo:'https://store-images.s-microsoft.com/image/apps.30495.13510798887792718.c58f517f-a070-448d-9f42-44c93b19dcae.05c3b4ed-79d8-4d84-be6d-7d3290f1533e?w=180&h=180&q=60'
        },
        {
          name:'MDN Web Docs',
          title:'Resources for developers, by developers.',
          link:'https://developer.mozilla.org',
          logo:'https://avatars1.githubusercontent.com/u/7565578?s=280&v=4'
        },
        {
          name:'FreeCodeCamp',
          title:'Learn to code for free.',
          link:'https://www.freecodecamp.org/',
          logo:'https://pbs.twimg.com/profile_images/692531829287567360/ytP7U362.png'
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
        },
        {
          name:'Plurasight',
          title:'Build skills. Work smarter.',
          link:'https://www.pluralsight.com/',
          logo:'https://images-na.ssl-images-amazon.com/images/I/51-Hci2bYjL.png'
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
  border-radius:2em;
}
</style>
