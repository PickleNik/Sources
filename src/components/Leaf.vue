<template lang="html">
  <main class="secondary">
    <v-container class="mt-4 pt-5">
      <v-layout id="whatIs">
        <v-flex xs12 sm8 offset-sm2 class="mb-2 text-xs-center text-sm-center">
          <v-tooltip top>
            <h1 slot="activator" class="titles roundL text-sm-center">
             <a class="contact grey--text" href="https://en.wikipedia.org/wiki/HTML" target="_blank">What is {{leaf.name}}</a></h1>
            <span>Read in Wikipedia</span>
          </v-tooltip>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs12 sm10 offset-sm1>

          <v-card id="fadeIn" dark class="roundXL mb-4" style="border-radius:3em;">
            <v-card-media>
              <iframe style="border-top-right-radius: 3em; border-top-left-radius: 3em;" width="100%" height="514" :src="leaf.whatIsVideo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </v-card-media>

            <v-card-text class="text-xs-center text-sm-center grey darken-3 primary--text">
            {{leaf.title}}
            </v-card-text>
          </v-card>

        </v-flex>
      </v-layout>

      <v-layout id="sources">
        <v-flex xs12 sm8 offset-sm2 class="text-xs-center text-sm-center">
          <h1 class="titles grey--text pt-3">Sources</h1>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs12 sm12 class="text-sm-center text-xs-center">
          <app-src-card :sources="leaf.sources"></app-src-card>
        </v-flex>
      </v-layout>

      <v-layout id="addition">
        <v-flex xs12 sm4 offset-sm4 class="text-xs-center text-sm-center">
          <h1 class="titles grey--text pt-3">Additionally</h1>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs12 sm10 offset-sm1 class="pt-3 pb-3 text-xs-center text-sm-center">
          <div v-for="add in leafsTools"
          v-ripple="{ class: add.ripple }"
          id="leaf" class="mb-5 ml-3 mr-3 d-inline-block text-sm-center text-xs-center">
            <img id="leafLogo" class="round" :src="add.logo" />
            <h3 class="white--text mt-1" style="text-shadow: 1px 1px .1em #555;">{{ add.name }}</h3>
          </div>
      </v-flex>
      </v-layout>


    </v-container>

    <div class="text-sm-center hidden-xs-only pa-3 transparent" style="position:fixed; right:2em; bottom:2em; background:#fff; border-radius:3em;">
        <h1 class="grey--text">Next</h1>
        <div class="text-sm-center" style="max-width:11em;">
          <v-chip class="teal white--text">JQuery</v-chip>
          <v-chip class="yellow darken-2 white--text">ES6</v-chip>
          <v-chip class="purple white--text">Frameworks</v-chip>
        </div>
    </div>

    <div class="text-sm-center hidden-xs-only pa-3 transparent" style="position:fixed; left:2em; bottom:2em; background:#fff; border-radius:3em;">
        <h1 class="grey--text">Required</h1>
        <div class="text-sm-center">
          <v-chip class="orange white--text">HTML</v-chip>
          <v-chip class="blue white--text">CSS</v-chip>
        </div>
    </div>

    <app-nav :navs="navs"></app-nav>

  </main>
</template>

<script>
export default {
  props: ['to'],
  data () {
    return {
      navs: [
        { name: 'What is', href: '#whatIs', icon: 'details' },
        { name: 'Sources', href: '#sources', icon: 'local_library' },
        { name: 'Additionally', href: '#addition', icon: 'add_to_queue' },
        { name: 'Tree', to: '/tree', icon: 'device_hub', posticon: 'keyboard_arrow_left' }
      ]
    }
  },
  computed: {
    leaf () {
      return this.$store.getters.openedLeaf(this.to)
    },
    leafsBasic () {
      return this.$store.getters.leafsBasic
    },
    leafsBackend () {
      return this.$store.getters.leafsBackend
    },
    leafsTools () {
      return this.$store.getters.htmlAdd
    }
  }
}
</script>

<style scoped>
  #leaf{
    height:10em;
    width:10em;
    padding-top:.5em;
    transform-origin: center;
    transition-duration: 1s;
    transition-property: all;
    transform-origin: top center;
    animation: pulse .5s linear 1;
    border-radius:.8em;
  }
  #up{
      animation: zoomInRight 1s linear 1;
  }
  #leafLogo{
    height:9em;
    width:9em;
    transform-origin: center;
    transition-duration: 1s;
    transition-property: all;
    transform: scale(0.8);
    user-select: none;
  }
  #leaf:hover{
    background: rgba(222,222,222,0.5);
    border-radius:100%;
    transform: scale(1.1);
    cursor:pointer;
    transform-origin: center;
    transition-duration: .8s;
    transition-property: all;
  }
  #leaf:hover > #leafLogo{
    transform: scale(0.7);
    transform-origin: center;
    transition-duration: .3s;
    transition-property: all;
  }
  .half-trans{
    background:rgba(0,0,0,0.5);
  }
  .mycard{
    transition-duration:.3s;
    transition-property: all;
  }
  .mycard:hover{
    transform: translateY(-.3em);
    filter: brightness(50%);
  }
  #fadeIn{
    animation: fadeIn 1s linear 1;
  }
  .titles{
    animation:fadeIn 1s linear 1;
  }
  .srcard{
    animation: pulse .5s linear 1;
  }
</style>
