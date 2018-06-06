<template lang="html">
  <main class="background">
    <v-container fluid>
      <v-flex xs12 sm12 md8 offset-md2 lg8 offset-lg2 xl8 offset-xl2>
        <div v-for="branch in branches" :id="branch.id" class="zoom mb-5 mt-3 roundXXL pt-5 pb-3 secondary">

          <v-flex xs12 sm8 offset-sm2 class="pb-3">
            <v-tooltip top color="primary">
              <h1 slot="activator" class="link link--yaku ma-2 text-sm-center text-xs-center title--text">
                <span v-for="letter in branch.name.split('')">{{ letter }}</span>
              </h1>
              <span class="text--text">Click to read about {{ branch.name }}</span>
            </v-tooltip>
            <p style="text-align:center;" class="text--text">{{ branch.description }}</p>
            <v-divider class="title ma-2"></v-divider>
          </v-flex>

          <v-flex style="animation-delay:.2s;" class="zoom hidden-sm-and-down text-md-center text-lg-center">
            <a v-for="leaf in branch.leafs"
            :href="leaf.href" target="_blank"
            @click="openLeaf(leaf.to)" class="leaf d-inline-block mb-5 mx-4">
              <v-badge v-if="leaf.badge" color="transparent" class="leafLogo"><img class="leafLogo round" :src="leaf.logo" /><icon slot="badge" :name="leaf.badge" scale="10" :class="leaf.badgecolor" ></icon></v-badge>
              <img v-if="!leaf.badge" class="leafLogo round" :src="leaf.logo" />
              <h3 class="text--text mt-1">{{ leaf.name }}</h3>
            </a>
          </v-flex>

          <v-flex style="animation-delay:.2s;" class="zoom hidden-md-and-up text-sm-center text-xs-center">
            <a v-for="leaf in branch.leafs"
            :href="leaf.href" target="_blank"
            @click="openLeaf(leaf.to)"  class="leaf d-inline-block mb-5 mx-0">
              <v-badge v-if="leaf.badge" color="transparent" class="leafLogo"><icon slot="badge" :name="leaf.badge" scale="10" :class="leaf.badgecolor" ></icon><img class="leafLogo round" :src="leaf.logo" /></v-badge>
              <img v-if="!leaf.badge" class="leafLogo round" :src="leaf.logo" />
              <h3 class="text--text mt-1">{{ leaf.name }}</h3>
            </a>
          </v-flex>

        </div>
      </v-flex>
    </v-container>

    <!--ASIDE-->
    <app-nav :navs="navs"></app-nav>
    <!-- <v-navigation-drawer
      hide-overlay
      v-model="drawer"
      dark
      fixed
      class="pl-1 pt-3 secondary hidden-md-and-up"
      left >
      <app-nav :navs="navs"></app-nav>
    </v-navigation-drawer> -->

  </main>
</template>

<script>
export default {
  data () {
    return {
      navs: [
        { name: 'Basics', href: '#basics', offset: -33, icon: 'code' },
        { name: 'Text Editors', href: '#editors', offset: -33, icon: 'keyboard' },
        { name: 'Frontend', href: '#frontend', offset: -33, icon: 'web' },
        { name: 'Backend', href: '#backend', offset: -33, icon: 'storage' },
        { name: 'JS Frameworks', href: '#frameworks', offset: -33, icon: 'settings' },
        { name: 'CSS Frameworks', href: '#libraries', offset: -33, icon: 'color_lens' },
        { name: 'Hosting', href: '#hosting', offset: -33, icon: 'router' },
        { name: 'Testing', href: '#testing', offset: -33, icon: 'bug_report' },
        { name: 'Graphics', href: '#graphics', offset: -33, icon: 'format_paint' },
        { name: 'SSR', href: '#ssr', offset: -33, icon: 'access_time' },
        { name: 'Apps', href: '#apps', offset: -33, icon: 'developer_mode' },
        { name: 'Tools', href: '#tools', offset: -33, icon: 'build' },
        { name: 'Communities', href: '#communities', offset: -33, icon: 'group' }
      ],
      add: 'leaf',
      drawer: true
    }
  },
  methods: {
    openLeaf (to) {
      if (to) {
        this.$router.push('/leaf-' + to)
      }
    }
  },
  computed: {
    branches () {
      return this.$store.getters.branches
    }
  }
}
</script>

<style lang="css" scoped>
  .leaf{
    height:9em;
    width:9em;
    padding-top:.5em;
    transform-origin: center;
    transition-duration: 1s;
    transition-property: all;
    transform-origin: top center;
    border-radius:.8em;
  }
  .leafLogo{
    height:8em;
    width:8em;
    transform-origin: center;
    transition-duration: 1s;
    transition-property: all;
    transform: scale(0.8);
    user-select: none;
  }
  .leaf:hover{
    border-radius:100%;
    transform: scale(1.1);
    cursor:pointer;
    filter: drop-shadow(0 0 1em var(--title));
    transform-origin: center;
    transition-duration: .8s;
    transition-property: all;
  }
  .leaf:hover > .leafLogo{
    transform: scale(1.01);
    transform-origin: center;
    transition-duration: .3s;
    transition-property: all;
  }
</style>
