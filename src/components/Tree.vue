<template lang="html">
  <main class="secondary">
    <v-container class="pt-5">
      <v-layout row>
        <v-flex xs12 sm10 offset-sm1>

          <div id="basics" class="mb-5 mt-3 roundXXL  pt-5 pb-5 elevation-22 grey darken-4">
            <v-flex xs8 offset-xs2 sm8 offset-sm2 class="pb-3">
              <v-tooltip top>
                <h1 slot="activator" class="link link--yaku ma-2 text-sm-center text-xs-center">
                  <span>B</span><span>a</span><span>s</span><span>i</span><span>c</span><span>s</span>
                </h1>
                <span>Click to read about Basics</span>
              </v-tooltip>
              <h3 style="text-align:center;" class="white--text words">HTML, CSS and JavaScript will open you doors to the Web Development.</h3>
              <hr class="grey ma-2"/>
            </v-flex>
            <v-flex xs12 sm12>
              <v-container class="pa-0">
                <v-layout row wrap>
                  <v-flex class="text-sm-center text-xs-center">
                        <div v-for="leaf in leafsBasic"
                        v-ripple="{ class: leaf.ripple }"
                        @click="openLeaf(leaf.to)" id="leaf"
                        class="hidden-xs-only mb-5 ml-3 mr-3 d-inline-block text-sm-center text-xs-center">
                          <img id="leafLogo" class="round" :src="leaf.logo" />
                          <h3 class="white--text mt-1" style="text-shadow: 1px 1px .1em #555;">{{ leaf.name }}</h3>
                        </div>
                        <div v-for="leaf in leafsBasic"
                        v-ripple="{ class: leaf.ripple }"
                        @click="openLeaf(leaf.to)" id="leaf"
                        class="hidden-sm-and-up mb-5 ml-0 mr-0 d-inline-block text-sm-center text-xs-center">
                          <img id="leafLogo" class="round" :src="leaf.logo" />
                          <h3 class="white--text mt-1" style="text-shadow: 1px 1px .1em #555;">{{ leaf.name }}</h3>
                        </div>
                    </router-link>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </div>

          <div id="backend" class="mb-5 mt-5 roundXXL  pt-5 pb-5 elevation-22 grey darken-4">
            <v-flex xs8 offset-xs2 sm8 offset-sm2 class="pb-3">
              <v-tooltip top>
                <h1 slot="activator" class="link link--yaku ma-2 text-sm-center text-xs-center">
                  <span>B</span><span>a</span><span>c</span><span>k</span><span>e</span><span>n</span><span>d</span>
                </h1>
                <span>Click to read about Basics</span>
              </v-tooltip>
              <h3 style="text-align:center;" class="white--text words">Control and manage data on your page.</h3>
              <hr class="grey ma-2"/>
            </v-flex>
            <v-flex xs12 sm12>
              <v-container class="pa-0">
                <v-layout row wrap>
                  <v-flex class="text-sm-center text-xs-center">
                        <div v-for="leaf in leafsBackend"
                        v-ripple="{ class: leaf.ripple }"
                        @click="openLeaf(leaf.to)" id="leaf"
                        class="hidden-xs-only mb-5 ml-3 mr-3 d-inline-block text-sm-center">
                          <img id="leafLogo" class="round" :src="leaf.logo" />
                          <h3 class="white--text mt-1" style="text-shadow: 1px 1px .1em #555;">{{ leaf.name }}</h3>
                        </div>
                        <div v-for="leaf in leafsBackend"
                        v-ripple="{ class: leaf.ripple }"
                        @click="openLeaf(leaf.to)" id="leaf"
                        class="hidden-sm-and-up mb-5 ml-0 mr-0 d-inline-block text-sm-center text-xs-center">
                          <img id="leafLogo" class="round" :src="leaf.logo" />
                          <h3 class="white--text mt-1" style="text-shadow: 1px 1px .1em #555;">{{ leaf.name }}</h3>
                        </div>
                    </router-link>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </div>

          <div id="frameworks" class="mb-5 mt-5 roundXXL pt-5 pb-5 elevation-22 grey darken-4">
            <v-flex xs8 offset-xs2 sm8 offset-sm2 class="pb-3">
              <v-tooltip top>
                <h1 slot="activator" class="link link--yaku ma-2 text-sm-center text-xs-center">
                  <span>F</span><span>r</span><span>a</span><span>m</span><span>e</span><span>w</span><span>o</span><span>r</span><span>k</span><span>s</span>
                </h1>
                <span>Click to read about Frameworks</span>
              </v-tooltip>
              <h3 style="text-align:center;" class="white--text words">Make your webpage running faster with JavaScript Frameworks!</h3>
              <hr class="grey ma-2"/>
            </v-flex>
            <v-flex xs12 sm12>
              <v-container class="pa-0">
                <v-layout row wrap>
                  <v-flex class="text-sm-center text-xs-center">
                      <div v-for="leaf in leafsFrameworks"
                      v-ripple="{ class: leaf.ripple }" @click="openLeaf(leaf.to)"
                      id="leaf" class="hidden-xs-only mb-5 mr-3 ml-3 text-sm-center text-xs-center d-inline-block">
                        <img id="leafLogo" class="round" :src="leaf.logo" />
                        <h3 class="white--text mt-1" style="text-shadow: 1px 1px .1em #555;">{{ leaf.name }}</h3>
                      </div>
                      <div v-for="leaf in leafsFrameworks"
                      v-ripple="{ class: leaf.ripple }" @click="openLeaf(leaf.to)"
                      id="leaf" class="hidden-sm-and-up mb-5 mr-0 ml-0 text-sm-center text-xs-center d-inline-block">
                        <img id="leafLogo" class="round" :src="leaf.logo" />
                        <h3 class="white--text mt-1" style="text-shadow: 1px 1px .1em #555;">{{ leaf.name }}</h3>
                      </div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </div>

          <div id="libraries" class="mb-5 mt-5 roundXXL  pt-5 pb-5 elevation-22 grey darken-4">
            <v-menu open-on-hover offset-y>
              <v-btn absolute large
              slot="activator" dark class="grey darken-3"
              style="z-index:100;top:-58px;left:0;border-top-left-radius:5em;">Framework: {{ frameworkPicked }}</v-btn>
              <v-list id="framelist" dense light class="secondary pa-0 elevation-0"dark style="border-bottom-right-radius:5em;">
                <v-list-tile v-for="framework in frameworks" class="pa-0 elevation-0" ripple :key="framework.title" @click="frameworkPicked = framework.title">
                  <v-list-tile-title>{{ framework.title }}</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
            <v-flex xs8 offset-xs2 sm8 offset-sm2 class="pb-3">
              <v-tooltip top>
                <h1 slot="activator" class="link link--yaku ma-2 text-sm-center text-xs-center">
                  <span>L</span><span>i</span><span>b</span><span>r</span><span>a</span><span>r</span><span>i</span><span>e</span><span>s</span>
                </h1>
                <span>Click to read about Libraries</span>
              </v-tooltip>
              <h3 style="text-align:center;" class="white--text words">Add awesome components and styles to your page with best CSS Libraries.</h3>
              <hr class="grey ma-2"/>
            </v-flex>
            <v-flex xs12 sm12>
              <v-container class="pa-0">
                <v-layout row wrap>
                  <v-flex class="text-sm-center text-xs-center">
                      <div v-for="leaf in leafsLibraries" v-if="frameworkPicked === 'none'"
                      v-ripple="{ class: leaf.ripple }" id="leaf"
                      class="mb-5 ml-3 mr-3 d-inline-block text-sm-center text-xs-center">

                        <img id="leafLogo" class="round" :src="leaf.logo" />
                        <h3 class="white--text mt-1" style="text-shadow: 1px 1px .1em #555;">{{ leaf.name }}</h3>
                      </div>

                      <div v-for="leaf in leafsVueLibs" v-if="frameworkPicked === 'Vue.js'"
                      v-ripple="{ class: leaf.ripple }" id="leaf"
                      class="mb-5 ml-3 mr-3 d-inline-block text-sm-center text-xs-center">
                        <img id="leafLogo" class="round" :src="leaf.logo" />
                        <h3 class="white--text mt-1" style="text-shadow: 1px 1px .1em #555;">{{ leaf.name }}</h3>
                      </div>

                      <div v-for="leaf in leafsAngularLibs" v-if="frameworkPicked === 'Angular.js'"
                      v-ripple="{ class: leaf.ripple }" id="leaf"
                      class="mb-5 ml-3 mr-3 d-inline-block text-sm-center text-xs-center">
                        <img id="leafLogo" class="round" :src="leaf.logo" />
                        <h3 class="white--text mt-1" style="text-shadow: 1px 1px .1em #555;">{{ leaf.name }}</h3>
                      </div>

                      <div v-for="leaf in leafsReactLibs" v-if="frameworkPicked === 'React.js'"
                      v-ripple="{ class: leaf.ripple }" id="leaf"
                      class="mb-5 ml-3 mr-3 d-inline-block text-sm-center text-xs-center">
                        <img id="leafLogo" class="round" :src="leaf.logo" />
                        <h3 class="white--text mt-1" style="text-shadow: 1px 1px .1em #555;">{{ leaf.name }}</h3>
                      </div>

                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </div>

          <div id="hosting" class="mb-5 mt-5 roundXXL pt-5 pb-5 elevation-22 grey darken-4">
            <v-flex xs8 offset-xs2 sm8 offset-sm2 class="pb-3">
              <v-tooltip top>
                <h1 slot="activator" class="link link--yaku ma-2 text-sm-center text-xs-center">
                  <span>H</span><span>o</span><span>s</span><span>t</span><span>i</span><span>n</span><span>g</span>
                </h1>
                <span>Click to read about Hosting</span>
              </v-tooltip>
              <h3 style="text-align:center;" class="white--text words">Put your projects on the web.</h3>
              <hr class="grey ma-2"/>
            </v-flex>
            <v-flex xs12 sm12>
              <v-container class="pa-0">
                <v-layout row wrap>
                  <v-flex class="text-sm-center text-xs-center">
                      <div v-for="leaf in leafsHosting"
                      v-ripple="{ class: leaf.ripple }" @click="openLeaf(leaf.to)"
                      id="leaf" class="hidden-xs-only mb-5 mr-3 ml-3 text-sm-center text-xs-center d-inline-block">
                        <img id="leafLogo" class="round" :src="leaf.logo" />
                        <h3 class="white--text mt-1" style="text-shadow: 1px 1px .1em #555;">{{ leaf.name }}</h3>
                      </div>
                      <div v-for="leaf in leafsHosting"
                      v-ripple="{ class: leaf.ripple }" @click="openLeaf(leaf.to)"
                      id="leaf" class="hidden-sm-and-up mb-5 mr-0 ml-0 text-sm-center text-xs-center d-inline-block">
                        <img id="leafLogo" class="round" :src="leaf.logo" />
                        <h3 class="white--text mt-1" style="text-shadow: 1px 1px .1em #555;">{{ leaf.name }}</h3>
                      </div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </div>

          <div id="mobile" class="mb-5 mt-5 roundXXL pt-5 pb-5 elevation-22 grey darken-4">
            <v-flex xs8 offset-xs2 sm8 offset-sm2 class="pb-3">
              <v-tooltip top>
                <h1 slot="activator" class="link link--yaku ma-2 text-sm-center text-xs-center">
                  <span>A</span><span>p</span><span>p</span><span>s</span>
                </h1>
                <span>Click to read about Apps</span>
              </v-tooltip>
              <h3 style="text-align:center;" class="white--text words">Create mobile or cross-platform apps using your web-development skills</h3>
              <hr class="grey ma-2"/>
            </v-flex>
            <v-flex xs12 sm12>
              <v-container class="pa-0">
                <v-layout row wrap>
                  <v-flex class="text-sm-center text-xs-center">
                      <a  :href="leaf.href" target="_blank" v-for="leaf in leafsMobile"
                      v-ripple="{ class: leaf.ripple }" @click="openLeaf(leaf.to)"
                      id="leaf" class="hidden-xs-only mb-5 mr-3 ml-3 text-sm-center text-xs-center d-inline-block">
                        <img id="leafLogo" class="round" :src="leaf.logo" />
                        <h3 class="white--text mt-1" style="text-shadow: 1px 1px .1em #555;">{{ leaf.name }}</h3>
                      </a>
                      <a  :href="leaf.href" target="_blank" v-for="leaf in leafsMobile"
                      v-ripple="{ class: leaf.ripple }" @click="openLeaf(leaf.to)"
                      id="leaf" class="hidden-sm-and-up mb-5 mr-0 ml-0 text-sm-center text-xs-center d-inline-block">
                        <img id="leafLogo" class="round" :src="leaf.logo" />
                        <h3 class="white--text mt-1" style="text-shadow: 1px 1px .1em #555;">{{ leaf.name }}</h3>
                      </a>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </div>

          <div id="tools" class="mb-5 mt-5 roundXXL  pt-5 pb-5 elevation-22 grey darken-4">
            <v-flex xs8 offset-xs2 sm8 offset-sm2 class="pb-3">
              <h1 class="grey--text ma-2 text-sm-center text-xs-center words">Tools</h1>
              <h3 style="text-align:center;" class="white--text words">Check out theese usefull things</h3>
              <hr class="grey ma-2"/>
            </v-flex>
            <v-flex xs12 sm12>
              <v-container class="pa-0">
                <v-layout row wrap>
                  <v-flex class="text-sm-center text-xs-center">
                      <a  :href="leaf.href" target="_blank" v-for="leaf in leafsTools"
                      v-ripple="{ class: leaf.ripple }"
                      id="leaf" class="hidden-xs-only mb-5 ml-3 mr-3 d-inline-block text-sm-center text-xs-center">
                        <img id="leafLogo" class="round" :src="leaf.logo" />
                        <h3 class="white--text mt-1" style="text-shadow: 1px 1px .1em #555;">{{ leaf.name }}</h3>
                      </a>
                      <a  :href="leaf.href" target="_blank" v-for="leaf in leafsTools"
                      v-ripple="{ class: leaf.ripple }"
                      id="leaf" class="hidden-sm-and-up mb-5 ml-0 mr-0 d-inline-block text-sm-center text-xs-center">
                        <img id="leafLogo" class="round" :src="leaf.logo" />
                        <h3 class="white--text mt-1" style="text-shadow: 1px 1px .1em #555;">{{ leaf.name }}</h3>
                      </a>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </div>

        </v-flex>
      </v-layout>

      <v-layout row wrap>
          <v-flex xs12 sm10 offset-sm1 class="mb-5 text-sm-center text-xs-center roundXXL">
            <card3d class="mb-5 d-inline-block" style="width:90%; height:calc(100vh / 2);" data-image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0ef06f88dab75b74252e22465ad9c99d&auto=format&fit=crop&w=1050&q=80">
              <h1 slot="header"class="hidden-xs-only mb-5 pb-5"><h4>A Perfect Place For Your Advertisment</h4></h1>
              <h1 slot="header"class="hidden-sm-and-up mb-5 pb-5"><h6>Advertise Here</h6></h1>
              <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </card3d>
          </v-flex>
      </v-layout>

    </v-container>

    <!--ASIDE-->
    <app-nav :navs="navs"></app-nav>

    <v-flex class="text-sm-left transparent hidden-md-and-down" style="position:fixed; left:1em; bottom:1em; background:#fff; border-radius:3em;">
        <v-flex v-show="displayArticles" style="max-width:16em;">
          <v-chip v-ripple class="fullW darken-3 red white--text">What is web development</v-chip>
          <v-chip v-ripple class="fullW darken-3 pink white--text">Frontend</v-chip>
          <v-chip v-ripple class="fullW darken-3 purple white--text">Backend</v-chip>
          <v-chip v-ripple class="fullW darken-3 deep-purple white--text">Basics</v-chip>
          <v-chip v-ripple class="fullW darken-3 indigo white--text">Frameworks</v-chip>
          <v-chip v-ripple class="fullW darken-3 blue white--text">Libraries</v-chip>
          <v-chip v-ripple class="fullW darken-3 light-blue white--text">Moblie Apps</v-chip>
          <v-chip v-ripple class="fullW darken-3 cyan white--text">Tools</v-chip>
        </v-flex>
        <h1 @click="displayArticles = !displayArticles" class="link link--yaku"><span>A</span><span>r</span><span>t</span><span>i</span><span>c</span><span>l</span><span>e</span><span>s</span></h1>
    </v-flex>

    <v-flex class="text-sm-right transparent hidden-md-and-down" style="position:fixed; right:1em; bottom:1em; background:#fff; border-radius:3em;">
        <v-flex v-show="displaySources" style="max-width:16em;">
          <v-chip v-ripple class="fullW darken-3 teal white--text">CodeCademy</v-chip>
          <v-chip v-ripple class="fullW darken-3 green white--text">Khanacademy</v-chip>
          <v-chip v-ripple class="fullW darken-3 light-green white--text">Treehouse</v-chip>
          <v-chip v-ripple class="fullW darken-3 lime white--text">W3Schools</v-chip>
          <v-chip v-ripple class="fullW darken-3 yellow white--text">Sololearn</v-chip>
          <v-chip v-ripple class="fullW darken-3 amber  white--text">Docs</v-chip>
          <v-chip v-ripple class="fullW darken-3 orange white--text">Mobile</v-chip>
          <v-chip v-ripple class="fullW darken-3 deep-orange white--text">Udemy</v-chip>
          <v-chip v-ripple class="fullW darken-3 red white--text">YouTube</v-chip>
          <v-chip v-ripple class="fullW darken-3 pink white--text">All</v-chip>
        </v-flex>
        <h1 @click="displaySources = !displaySources" class="link link--yaku"><span>S</span><span>o</span><span>u</span><span>r</span><span>c</span><span>e</span><span>s</span></h1>
    </v-flex>

  </main>
</template>

<script>
export default {
  data () {
    return {
      frameworkPicked: 'none',
      displayArticles: false,
      displaySources: false,
      navs: [
        { name: 'Basics', href: '#basics', offset: -33, icon: 'code' },
        { name: 'Backend', href: '#backend', offset: -33, icon: 'storage' },
        { name: 'Frameworks', href: '#frameworks', offset: -33, icon: 'settings' },
        { name: 'Libraries', href: '#libraries', offset: -33, icon: 'color_lens' },
        { name: 'Hosting', href: '#hosting', offset: -33, icon: 'router' },
        { name: 'Apps', href: '#mobile', offset: -33, icon: 'developer_mode' },
        { name: 'Tools', href: '#tools', offset: -33, icon: 'build' },
        { name: 'Plan', to: '', icon: 'trending_up', offset: -33, posticon: 'keyboard_arrow_right' }
      ],
      frameworks: [
        { title: 'Vue.js' },
        { title: 'Angular.js' },
        { title: 'React.js' },
        { title: 'none' }
      ]
    }
  },
  methods: {
    openLeaf (to) {
      this.$router.push('/leaf/' + to)
    }
  },
  computed: {
    leafsBasic () {
      return this.$store.getters.leafsBasic
    },
    leafsBackend () {
      return this.$store.getters.leafsBackend
    },
    leafsFrameworks () {
      return this.$store.getters.leafsFrameworks
    },
    leafsLibraries () {
      return this.$store.getters.leafsLibraries
    },
    leafsVueLibs () {
      return this.$store.getters.leafsVueLibs
    },
    leafsReactLibs () {
      return this.$store.getters.leafsReactLibs
    },
    leafsAngularLibs () {
      return this.$store.getters.leafsAngularLibs
    },
    leafsHosting () {
      return this.$store.getters.leafsHosting
    },
    leafsMobile () {
      return this.$store.getters.leafsMobile
    },
    leafsTools () {
      return this.$store.getters.leafsTools
    }
  }
}
</script>

<style lang="css" scoped>
  .fullW{
    width:100%;
    animation: bounceInUp 1s linear 1;
    user-select:none;
  }
  .fullW:hover{
    filter:brightness(111%);
  }
  @keyframes bounceInUp {
    from, 60%, 75%, 90%, to {
      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    from {
      opacity: 0;
      transform: translate3d(0, 3000px, 0);
    }

    60% {
      opacity: 1;
      transform: translate3d(0, -20px, 0);
    }

    75% {
      transform: translate3d(0, 10px, 0);
    }

    90% {
      transform: translate3d(0, -5px, 0);
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }
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
    background: #444;
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
  .words{
    animation: fadeInDown .5s linear 1;
  }


/* Yaku */
.link--yaku {
	color: #bababa;
	overflow: hidden;
  cursor: pointer;
}
.link--yaku span {
	display: inline-block;
	position: relative;
	-webkit-transform: perspective(1000px) rotate3d(0,1,0,0deg);
	transform: perspective(1000px) rotate3d(0,1,0,0deg);
	-webkit-transition: -webkit-transform 0.5s, color 0.5s;
	transition: transform 0.5s, color 0.5s;
}

.link--yaku:hover span {
	color: lightgreen;
	-webkit-transform: perspective(1000px) rotate3d(0,1,0,360deg);
	transform: perspective(1000px) rotate3d(0,1,0,360deg);
}

.link--yaku span:first-child,
.link--yaku:hover span:first-child {
	-webkit-transition-delay: 0s;
	transition-delay: 0s;
}
.link--yaku span:nth-child(2),
.link--yaku:hover span:nth-child(2) {
	-webkit-transition-delay: 0.1s;
	transition-delay: 0.1s;
}
.link--yaku span:nth-child(3),
.link--yaku:hover span:nth-child(3) {
	-webkit-transition-delay: 0.2s;
	transition-delay: 0.2s;
}
.link--yaku span:nth-child(4),
.link--yaku:hover span:nth-child(4) {
	-webkit-transition-delay: 0.3s;
	transition-delay: 0.3s;
}
.link--yaku span:nth-child(5),
.link--yaku:hover span:nth-child(5) {
	-webkit-transition-delay: 0.4s;
	transition-delay: 0.4s;
}
.link--yaku span:nth-child(6),
.link--yaku:hover span:nth-child(6) {
	-webkit-transition-delay: 0.5s;
	transition-delay: 0.5s;
}
.link--yaku span:nth-child(7),
.link--yaku:hover span:nth-child(7) {
	-webkit-transition-delay: 0.6s;
	transition-delay: 0.6s;
}
.link--yaku span:nth-child(8),
.link--yaku:hover span:nth-child(8) {
	-webkit-transition-delay: 0.7s;
	transition-delay: 0.7s;
}.link--yaku span:nth-child(9),
.link--yaku:hover span:nth-child(9) {
	-webkit-transition-delay: 0.8s;
	transition-delay: 0.8s;
}
.link--yaku span:nth-child(10),
.link--yaku:hover span:nth-child(10) {
	-webkit-transition-delay: 0.9s;
	transition-delay: 0.9s;
}
.link--yaku span:nth-child(11)
.link--yaku:hover span:nth-child(11) {
	-webkit-transition-delay: 1s;
	transition-delay: 1s;
}
</style>
