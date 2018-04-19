<template lang="html">
  <main class="secondary">
    <v-container fluid>
      <v-flex xs12 sm12 md8 offset-md2 lg8 offset-lg2 xl8 offset-xl2>
        <div v-for="branch in branches" :id="branch.id" class="mb-5 mt-3 roundXXL pt-5 pb-3 grey darken-4">

          <v-flex xs12 sm8 offset-sm2 class="pb-3">
            <v-tooltip top>
              <h1 slot="activator" class="link link--yaku ma-2 text-sm-center text-xs-center">
                <span v-for="letter in branch.name.split('')">{{ letter }}</span>
              </h1>
              <span>Click to read about {{ branch.name }}</span>
            </v-tooltip>
            <h3 style="text-align:center;" class="white--text words">{{ branch.description }}</h3>
            <hr class="grey ma-2"/>
          </v-flex>

          <v-flex class="hidden-sm-and-down text-md-center text-lg-center">
            <a v-for="leaf in branch.leafs"
            :href="leaf.href" target="_blank"
            v-ripple="{ class: leaf.ripple }"
            @click="openLeaf(leaf.to)" id="leaf"
            class="d-inline-block mb-5 ml-3 mr-3">
              <img id="leafLogo" class="round" :src="leaf.logo" />
              <h3 class="white--text mt-1" style="text-shadow: 1px 1px .1em #555;">{{ leaf.name }}</h3>
            </a>
          </v-flex>

          <v-flex class="hidden-md-and-up text-sm-center text-xs-center">
            <a v-for="leaf in branch.leafs"
            :href="leaf.href" target="_blank"
            v-ripple="{ class: leaf.ripple }"
            @click="openLeaf(leaf.to)" id="leaf"
            class="d-inline-block mb-5 ml-0 mr-0">
              <img id="leafLogo" class="round" :src="leaf.logo" />
              <h3 class="white--text mt-1" style="text-shadow: 1px 1px .1em #555;">{{ leaf.name }}</h3>
            </a>
          </v-flex>

        </div>
      </v-flex>

      <v-flex xs12 sm12 md8 offset-md2 class="mb-5 text-sm-center text-xs-center roundXXL">
        <card3d class="ma-0 mb-5 d-inline-block" style="width:90%; height:calc(100vh / 2);" data-image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0ef06f88dab75b74252e22465ad9c99d&auto=format&fit=crop&w=1050&q=80">
          <h1 slot="header"class="hidden-xs-only mb-5 pb-5"><h4>A Perfect Place For Your Advertisment</h4></h1>
          <h1 slot="header"class="hidden-sm-and-up mb-5 pb-5"><h6>Advertise Here</h6></h1>
          <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </card3d>
      </v-flex>
    </v-container>

    <!--ASIDE-->
    <app-nav :navs="navs"></app-nav>

    <app-add :add="add"></app-add>

  </main>
</template>

<script>
export default {
  data () {
    return {
      navs: [
        { name: 'Basics', href: '#basics', offset: -33, icon: 'code' },
        { name: 'Frontend', href: '#frontend', offset: -33, icon: 'web' },
        { name: 'Backend', href: '#backend', offset: -33, icon: 'storage' },
        { name: 'Frameworks', href: '#frameworks', offset: -33, icon: 'settings' },
        { name: 'Libraries', href: '#libraries', offset: -33, icon: 'color_lens' },
        { name: 'Graphics', href: '#graphics', offset: -33, icon: 'format_paint' },
        { name: 'Hosting', href: '#hosting', offset: -33, icon: 'router' },
        { name: 'Apps', href: '#apps', offset: -33, icon: 'developer_mode' },
        { name: 'Tools', href: '#tools', offset: -33, icon: 'build' },
        { name: 'Communities', href: '#communities', offset: -33, icon: 'group' }
      ],
      add: 'leaf'
    }
  },
  methods: {
    openLeaf (to) {
      if(to){
      this.$router.push('/leaf-' + to)}
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
