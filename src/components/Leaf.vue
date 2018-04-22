<template lang="html">
  <main class="secondary">
    <v-container fluid>
      <v-layout id="whatIs">

        <v-flex xs12 sm12 md8 offset-md2 lg8 offset-lg2 class="mb-2 mt-4 text-xs-center">
          <v-tooltip top>
            <h1 slot="activator" class="titles roundL mb-2 mt-4">
             <a class="grey--text link link--yaku" :href="leaf.wiki" target="_blank">What is <span v-for="letter in leaf.name.split('')">{{ letter }}</span></a></h1>
            <span>Click to read in Wikipedia</span>
          </v-tooltip>

          <v-card id="fadeIn" dark class="roundXL mb-4" style="border-radius:3em;">
            <v-card-media>
              <iframe style="border-top-right-radius: 3em; border-top-left-radius: 3em;" width="100%" height="514" :src="leaf.whatIsVideo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </v-card-media>

            <v-card-text class="text-xs-center grey darken-3 primary--text">
            {{leaf.title}}
            </v-card-text>
          </v-card>

        </v-flex>
      </v-layout>

      <v-layout id="sources">
        <v-flex xs12 sm12 md8 offset-md2 lg8 offset-lg2 class="text-xs-center">
          <h1 class="titles grey--text pt-3">Sources</h1>
          <app-src-card :sources="leaf.sources"></app-src-card>
        </v-flex>
      </v-layout>

      <v-layout id="addition">
        <v-flex xs12 sm12 md8 offset-md2 lg8 offset-lg2 class="pt-3 pb-3 text-xs-center">
          <h1 class="titles grey--text pt-3">Additionally</h1>
          <app-src-card :sources="leaf.addition"></app-src-card>
      </v-flex>
      </v-layout>

    </v-container>

    <v-flex md2 lg2 class="text-sm-center hidden-sm-and-down transparent" style="position:fixed; right:1em; bottom:1em; background:#fff; border-radius:3em;">
        <h1 class="grey--text">Next</h1>
          <v-btn round v-for="next in leaf.next" :key="next.name" :href="next.href" :to="next.to" :class="next.color" :disabled="next.disabled" class="secondary--text">
            <icon v-if="next.icon" :name="next.icon" class="mr-2" scale="1.5" ></icon>{{ next.name }}
          </v-btn>
    </v-flex>

    <v-flex md2 lg2 class="text-sm-center hidden-sm-and-down transparent" style="position:fixed; left:1em; bottom:1em; background:#fff; border-radius:3em;">
        <h1 class="grey--text">Required</h1>
          <v-btn round v-for="req in leaf.req" :key="req.name" :href="req.href" :to="req.to" :class="req.color" :disabled="req.disabled" class="secondary--text">
            <icon v-if="req.icon" :name="req.icon" class="mr-2" scale="1.5" ></icon>{{ req.name }}
          </v-btn>
    </v-flex>

    <app-nav :navs="navs"></app-nav>

    <app-add :add="add"></app-add>

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
</style>
