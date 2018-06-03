<template>
<v-app class="background pb-5">

<!--HERO-->
<div id="hero">
  <div class="text-sm-center">
    <div class="centerABS">
      <h2 class="zoom display-3 text--text hidden-xs-only">TutorialsTree</h2>
      <h2 class="zoom display-3 text--text hidden-sm-and-up">TutsTree</h2>
      <p class="white--text typed accent--text background round pa-2" style="font-size:1.5em;"><span id="greeting"></span></p>
      <a href="#" v-scroll-to="'#about'"><v-btn style="margin-left: 50%;transform:translateX(-50%);" dark large flat icon class="hidden-sm-and-up pa-5">
        <v-icon x-large>keyboard_arrow_down</v-icon>
      </v-btn></a>
      <a href="#" v-scroll-to="'#about'"><v-btn dark large flat icon class="zoom hidden-xs-only mx-auto pa-5">
        <v-icon x-large class="down text--text">keyboard_arrow_down</v-icon>
      </v-btn></a>
    </div>
  </div>
</div>

<!--ABOUT US-->
<v-layout id="about">
  <v-flex xs12 sm8 offset-sm2 class="pa-5 text-xs-center">
    <h1 class="title--text mb-1 mt-3">About</h1>
    <h2 class="py-3 text--text" style="text-align:justify;">TutorialsTree is for learning Web Development with online tutorials organized in
    <v-btn class="ma-0 accent--text"small flat round to="/tree"><h3><icon name="tree"></icon>Tree<icon dark name="tree"></icon></h3></v-btn>
    . The project is under development yet.</h2>
    <img class="round pa-3 hidden-xs-only" width="100%" src="http://frontenddeveloperjob.com/images/cool.png"/>

      <v-btn @click="welcomeDialog = true" round class="mt-2 secondary text--text"><v-icon class="hidden-xs-only" left>devices_other</v-icon><v-icon left>developer_mode</v-icon><h4>get started</h4><v-icon class="hidden-xs-only" right>code</v-icon><v-icon right>touch_app</v-icon></v-btn>

      <v-dialog presistent v-model="welcomeDialog" max-width="500px">
        <v-container class="roundXL secondary" align-content-center>
          <v-flex xs12 class="text-xs-center">
            <h1 class="title--text mb-3">WooHoo</h1>
            <p class="hidden-sm-and-down text--text">Please notice the scroll navigation on the left top and pages navigation on the right top of the screen. Hover titles to read about topics.</p>
            <p class="hidden-md-and-up text--text">Please notice the navigation at the bottom. For auto-scroll tap the button at the right and choose where to scroll to. Tap on titles to read about topics.</p>
            <v-spacer></v-spacer>
            <router-link to="/tree"><v-btn round light class="mt-2 accent"><v-icon class="hidden-xs-only" left>devices_other</v-icon><v-icon left>developer_mode</v-icon><h4>get started</h4><v-icon class="hidden-xs-only" right>code</v-icon><v-icon right>touch_app</v-icon></v-btn></router-link>
          </v-flex>
        </v-container>
      </v-dialog>
      <v-btn dark href="#" v-scroll-to="'#team'" flat round class="text--text mt-4">
        <v-icon x-large >keyboard_arrow_down</v-icon>Team<v-icon  x-large >keyboard_arrow_down</v-icon>
      </v-btn>
  </v-flex>
</v-layout>


<!--TEAM-->


<v-layout id="team">
  <v-flex xs12 sm8 offset-sm2 class="pa-5" style="min-height:100vh;">
    <h1 class="title--text mb-5 mt-3 text-xs-center">Team</h1>
    <v-layout row wrap>
      <v-flex sm10 offset-sm1 class="text-xs-center">
        <a class="roundXL" target="_blank" href="https://nikita-krupin.firebaseapp.com/" >
        <card3d class="zoom" style="height:calc(100vh / 2.3);" data-image="https://pp.userapi.com/c837225/v837225016/5e1f9/0t3RZJtU-Ag.jpg">
          <h1 slot="header" class="pb-3 text-sm-center"><h2 class="hidden-xs-only">Nikita Krupin</h2><h3 class="hidden-sm-and-up">Nikita Krupin</h3></h1>
          <p slot="content"><b><v-icon class="mb-2 white--text">lightbulb_outline</v-icon> Creator, &nbsp;<v-icon class="mb-2 white--text" left>color_lens</v-icon> Designer, &nbsp;<v-icon class="mb-2 white--text" left>developer_board</v-icon> Developer</b></p>
        </card3d>
        </a>
      </v-flex>
  </v-layout>
<!-- <v-flex xs12 class="mt-5 mb-5 pb-5">

  <v-layout row>
  <v-flex><div style="float:left"><a href="https://source-2fea2.firebaseapp.com/sources" class="contact">Sources</a></br></br><a href="https://source-2fea2.firebaseapp.com/tree" class="contact">Tree</a></br></br><p class="contact">Share</p></div></v-flex>

  <v-flex><div class="hidden-xs-only centerX" style="float:both"><p class="contact">Stay up to date</p><p class="contact">Report a bug</p><p class="contact">Our Twitter</p></div></v-flex>

  <v-flex><div style="float:right"><p class="contact">Our Sponsors</p><p class="contact">Support us</p><p class="contact">Help</p></div></v-flex>
  </v-layout>
</v-flex> -->
  </v-flex>
</v-layout>





<app-nav :navs="navs"></app-nav>


<!--COPYRIGHT-->
</v-app>
</template>

<script>
import Typed from 'typed.js'

export default {
  data () {
    return {
      welcomeDialog: false,
      navs: [
        { name: 'Home ', href: '#hero', icon: 'home' },
        { name: 'About ', href: '#about', icon: 'info' },
        { name: 'Team ', href: '#team', icon: 'group' },
        { name: 'Tree ', to: '/tree', icon: 'device_hub', posticon: 'keyboard_arrow_right' },
        { name: 'Sources ', to: '/sources', icon: 'local_library', posticon: 'keyboard_arrow_right' }
      ],
      typedOptions: ['Welcome to TutorialsTree', 'Here you can find bunch of tutorials about Web Development', 'By the way this website is using cookies.']
    }
  },
  mounted () {
    new Typed('#greeting', {// eslint-disable-line no-new
      strings: this.typedOptions,
      typeSpeed: 20,
      backSpeed: 10,
      startDelay: 2000,
      backDelay: 2000,
      smartBackspace: true,
      showCursor: false
    })
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poiret+One');
.typed::after {
	content: '_';
	display: inline;
	animation: blink 1s infinite;
}
@keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
}
#hero h2{
  font-family: 'Rammetto One', cursive;
}
#hero{
  background: var(--heroBG);
  background-size: cover;
  position:absolute;
  user-select:none;
  height:100vh;
  min-width: 100vw;
  width:100vw;
  padding-bottom:3em;
}
#about{
  position: absolute;
  min-width: 100vw;
  width:100vw;
  height: 101vh;
  padding-bottom:3em;
  top:100vh;
}
#team{
  min-width: 100vw;
  width:100vw;
  margin-top:200vh;
}
.down{
  animation: bounce 1.5s linear infinite;
  animation-delay: 2s;
  transform-origin: bottom;
}
.inUp{
  animation: fadeInUp 1s linear 1;
}

.particles{
  width:100vw;
  height:100vh;
}
</style>
