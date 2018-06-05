<template lang="html">
  <main class="background">
    <v-container fluid class="py-5">
      <v-layout class="centerX hidden-sm-and-down" row style="filter:drop-shadow(0 .5em 1em var(--secondary)); position:fixed; z-index: 999999999; top:0;" >
        <div class="t t1"></div>
        <a :href="leaf.wiki" target="_blank">
          <v-tooltip bottom color="primary">
            <h1 slot="activator" class=" py-2 px-5 primary title--text link link--yaku">
              <span v-for="letter in leaf.name.split('')">{{ letter }}</span>
            </h1>
            <span class="text--text">Click to read in Wikipedia</span>
          </v-tooltip>
        </a>
        <div class="t t2"></div>
      </v-layout>
      <v-layout class="hidden-md-and-up" row style="filter:drop-shadow(0 2em 1em var(--secondary)); position:fixed; z-index: 999999999; top:-1px;left:.5em;" >
        <div class="t t1"></div>
        <a :href="leaf.wiki" target="_blank">
          <v-tooltip bottom color="primary">
            <h1 style="width: calc(100vw - 4em);" slot="activator" class="text-xs-center py-2 px-2 primary title--text link link--yaku">
              <span v-for="letter in leaf.name.split('')">{{ letter }}</span>
            </h1>
            <span class="text--text">Click to read in Wikipedia</span>
          </v-tooltip>
        </a>
        <div class="t t2"></div>
      </v-layout>
      <v-layout id="whatIs">
        <v-flex xs12 sm12 md8 offset-md2 lg8 offset-lg2 class="mt-5 zoom mb-2 text-xs-center">
          <v-card id="fadeIn" dark class="roundXL mb-4" style="border-radius:3em;">
            <v-card-media  v-if="leaf.whatIsVideo">
              <iframe style="border-top-right-radius: 3em; border-top-left-radius: 3em; border:none" width="100%" height="514" :src="leaf.whatIsVideo" allowfullscreen></iframe>
            </v-card-media>
            <v-card-text class="text-xs-center primary text--text">
            {{leaf.title}}
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout id="sources">
        <v-flex xs12 sm12 md8 offset-md2 lg8 offset-lg2 class="text-xs-center">
          <h1 class="titles title--text pt-3">Sources</h1>
          <app-src-card :sources="leaf.sources"></app-src-card>
        </v-flex>
      </v-layout>

      <v-layout id="addition" v-if="leaf.addition">
        <v-flex xs12 sm12 md8 offset-md2 lg8 offset-lg2 class="pt-3 pb-3 text-xs-center">
          <h1 class="titles title--text pt-3">Additionally</h1>
          <app-src-card :sources="leaf.addition"></app-src-card>
      </v-flex>
      </v-layout>

    </v-container>

    <v-flex v-if="leaf.next" md2 lg2 class="zoom text-sm-center hidden-sm-and-down transparent" style="position:fixed; right:1em; bottom:1em; border-radius:3em;">
        <h1 class="title--text">Next</h1>
          <v-btn round v-for="next in leaf.next" :key="next.name" :href="next.href" :to="next.to" :class="next.color" :disabled="next.disabled" class="background--text">
            <icon v-if="next.icon" :name="next.icon" class="mr-2" scale="1.5" ></icon>{{ next.name }}
          </v-btn>
    </v-flex>

    <v-flex v-if="leaf.req" md2 lg2 class="zoom text-sm-center hidden-sm-and-down transparent" style="position:fixed; left:1em; bottom:1em; border-radius:3em;">
        <h1 class="title--text">Required</h1>
          <v-btn round v-for="req in leaf.req" :key="req.name" :href="req.href" :to="req.to" :class="req.color" :disabled="req.disabled" class="background--text">
            <icon v-if="req.icon" :name="req.icon" class="mr-2" scale="1.5" ></icon>{{ req.name }}
          </v-btn>
    </v-flex>

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
      ],
      add: ''
    }
  },
  computed: {
    leaf () {
      return this.$store.getters.openedLeaf(this.to)
    }
  }
}
</script>

<style scoped>
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
  .t {
    display: inline-block;
    width:0; height:0;
    border-radius: 2em;
  }
  .t1 {
    margin-top:-3.5em;
    margin-right:-3.6em;
    transform: rotateZ(45deg);
    border-top: solid 3.5em transparent;
    border-left: solid 3.5em transparent;
    border-right: solid 3.5em transparent;
    border-bottom: solid 3.5em var(--primary);
  }
  .t2 {
    margin-top:-3.5em;
    margin-left:-3.6em;
    transform: rotateZ(-45deg);
    border-top: solid 3.5em transparent;
    border-left: solid 3.5em transparent;
    border-right: solid 3.5em transparent;
    border-bottom: solid 3.5em var(--primary);
  }
</style>
