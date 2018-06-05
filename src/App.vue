<template>
  <v-app class="background" :class="{ light: theme }">
    <v-toolbar dark flat fixed class="transparent hidden-sm-and-down pl-4" style="min-width:100vw;">

      <v-toolbar-title style="cursor:pointer;" class="ml-0 round"><router-link to="/" tag="span" class="link--ilin text--text"><icon class="mx-1 accent--text" name="tree" scale="1.5"></icon><span>Tuts</span><span>Tree<icon class="mx-1 accent--text" name="terminal" scale="1.5"></icon></span></router-link></v-toolbar-title>
      <v-spacer></v-spacer>

        <v-tooltip bottom color="primary"><span class="text--text">Sources</span><v-btn slot="activator" color="accent" flat fab to="/sources" class="zoom ma-0"><v-icon dark>local_library</v-icon></v-btn></v-tooltip>
        <v-tooltip bottom color="primary"><span class="text--text">Tree</span><v-btn slot="activator" color="accent" flat fab to="/tree" class="zoom ma-0"><v-icon dark>device_hub</v-icon></v-btn></v-tooltip>
        <v-tooltip bottom color="primary"><span class="text--text">You</span><v-btn slot="activator" color="accent" flat fab to="/profile" class="zoom ma-0"><v-icon dark>person</v-icon></v-btn></v-tooltip>

    </v-toolbar>

    <v-bottom-nav
      style="z-index:99999; border-top-right-radius: 3em;border-top-left-radius: 3em; bottom:-1px;"
      class="hidden-md-and-up slideInUp py-1"
      fixed shift
      value="true"
      height="40" app
      :active.sync="e2"
      color="primary">
      <v-btn :ripple="false" class="pt-3 pb-1" to="/" color="accent--text">
        <span class="pt-2">Home</span>
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn :ripple="false" class="pt-3 pb-1" to="/sources" color="accent--text">
        <span class="pt-2">Sources</span>
        <v-icon>local_library</v-icon>
      </v-btn>
      <v-btn :ripple="false" class="pt-3 pb-1" to="/tree" color="accent--text">
        <span class="pt-2">Tree</span>
        <v-icon>device_hub</v-icon>
      </v-btn>
      <v-btn :ripple="false" class="pt-3 pb-1" to="/profile" color="accent--text">
        <span class="pt-2">You</span>
        <v-icon>person</v-icon>
      </v-btn>
    </v-bottom-nav>

    <a style="position:fixed;right:1em;top:5em;z-index:1;" class="zoom hidden-sm-and-down copyrighted-badge" title="Copyrighted.com Registered, Protected &amp; Monitored" target="_blank" href="https://www.copyrighted.com/website/dS8B0bc4ACr280Uw"><img class="round" alt="Copyrighted.com Registered &amp; Protected" border="0" width="125" height="25" srcset="https://static.copyrighted.com/badges/125x25/04_2_2x.png 2x" src="https://static.copyrighted.com/badges/125x25/04_2.png" /></a>
    <v-layout class="hidden-sm-and-down" row style="position:fixed;right:1em;top:8em;z-index:1;">
      <v-icon class="accent--text pb-4">brightness_2</v-icon>
      <v-switch class="px-2 pt-1"
        v-model="theme" color="accent"
        hint="Change Theme"
        presistent-hint>
      </v-switch>
      <v-icon class="accent--text darken-3 pb-4">brightness_7</v-icon>
    </v-layout>
    <!-- <v-content> -->
    <router-view></router-view>
    <!-- </v-content> -->
  </v-app>
</template>

<script>
export default {
  data: () => ({
    e2: 0,
    theme: false
  }),
  updated () {
    if (this.theme === false) {
      this.$vuetify.theme.text = '#ddd'
      this.$vuetify.theme.title = '#8e8e8e'
      this.$vuetify.theme.background = '#222'
      this.$vuetify.theme.secondary = '#111'
      this.$vuetify.theme.primary = '#333'
      this.$vuetify.theme.accent = '#90ee90'
    } else {
      this.$vuetify.theme.text = '#555'
      this.$vuetify.theme.title = '#aeaeae'
      this.$vuetify.theme.background = '#eee'
      this.$vuetify.theme.secondary = '#dedede'
      this.$vuetify.theme.primary = '#fff'
      this.$vuetify.theme.accent = '#66BB6A'
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Nunito|Rammetto+One');
  @import url('https://fonts.googleapis.com/css?family=Comfortaa|Quicksand');
  *{
    font-family: 'Comfortaa', sans-serif;
  }
  :root {
    --heroBG: url('https://images.unsplash.com/photo-1477244075012-5cc28286e465?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=76ae2034864198c0b4daf6117ba25e72&auto=format&fit=crop&w=1868&q=80') 100% 100% no-repeat;
    --secondary: #222;
    --accent: #90ee90;
    --title: #8e8e8e;
    --text: #ddd;
    --primary: #333;
  }
  .light {
    --heroBG: url('https://images.unsplash.com/photo-1491947153227-33d59da6c448?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3f475006a86934d5e483676571dde298&auto=format&fit=crop&w=2000&q=80') 100% 100% no-repeat;
    --secondary: #eee;
    --accent: #66BB6A;
    --title: #aeaeae;
    --text: #555;
    --primary: #fff;
  }
  p {
    font-size: 1em;
    -webkit-font-size: 1em;
    -ms-font-size: 1em;
    -o-font-size: 1em;
  }
  a {
    text-decoration:none;
  }
  .dialog{
    border-radius:3em;
  }
  .fillY{
    height:100vh;
  }
  .fillX{
    width:100vw;
  }
  .contact:hover {
    color: var(--accent);
    cursor:pointer;
    text-decoration:underline;
  }
  .round{
    border-radius: 1em;
    -webkit-border-radius: 1em;
    -ms-border-radius: 1em;
    -o-border-radius: 1em;
  }
  .roundL{
    border-radius: 2em;
    -webkit-border-radius: 2em;
    -ms-border-radius: 2em;
    -o-border-radius: 2em;
  }
  .roundXL{
    border-radius: 3em;
    -webkit-border-radius: 3em;
    -ms-border-radius: 3em;
    -o-border-radius: 3em;
  }
  .roundXXL{
    border-radius: 4em;
    -webkit-border-radius: 4em;
    -ms-border-radius: 4em;
    -o-border-radius: 4em;
  }

  .centerX{margin-left:50%;-webkit-transform:translateX(-55%);transform:translateX(-55%);}
  .centerXabs{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);}

  .centerY{margin-top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);}
  .centerYabs{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);}

  .center{margin-top:50%;margin-left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}
  .centerABS{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}

  ::-webkit-scrollbar{
    width: 0;
  }
  @keyframes zoomIn {
    from {
      opacity: 0;
      -webkit-transform: scale3d(.3, .3, .3);
              transform: scale3d(.3, .3, .3);
    }

    50% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
  .zoom {
    opacity: 0;
    animation: zoomIn .5s ease 1 forwards;
    -webkit-animation: zoomIn .5s ease 1 forwards;
  }
  @keyframes bounce {
    from, 20%, 53%, 80%, to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
              animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      -webkit-transform: translate3d(0,0,0);
              transform: translate3d(0,0,0);
    }

    40%, 43% {
      -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
              animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
      -webkit-transform: translate3d(0, -30px, 0);
              transform: translate3d(0, -30px, 0);
    }

    70% {
      -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
              animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
      -webkit-transform: translate3d(0, -15px, 0);
              transform: translate3d(0, -15px, 0);
    }

    90% {
      -webkit-transform: translate3d(0,-4px,0);
              transform: translate3d(0,-4px,0);
    }
  }
  .bounce{
    -webkit-animation: bounce 1s linear forwards;
            animation: bounce 1s linear forwards;
  }

  @keyframes slideInUp {
    from {
      transform: translate3d(0, 100%, 0);
      visibility: visible;
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }

  .slideInUp {
    animation: slideInUp .5s ease 1 forwards;
  }
  @keyframes rubberBand {
    from {
      transform: scale3d(1, 1, 1);
    }

    30% {
      transform: scale3d(1.25, 0.75, 1);
    }

    40% {
      transform: scale3d(0.75, 1.25, 1);
    }

    50% {
      transform: scale3d(1.15, 0.85, 1);
    }

    65% {
      transform: scale3d(.95, 1.05, 1);
    }

    75% {
      transform: scale3d(1.05, .95, 1);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
  }

  .rubberBand {
    animation: rubberBand 1s linear 1;
  }

  /* Ilin */
  .link--ilin {
  	overflow: hidden;
  	color: var(--primary);
  }

  .link--ilin span {
  	position: relative;
  	display: inline-block;
  	-webkit-transition: color 0.5s;
  	transition: color 0.5s;
  }

  .link--ilin:hover span{
  	color: var(--accent);
  }

  .link--ilin span::before {
  	content: '';
  	position: absolute;
  	width: 100%;
  	height: 100%;
  	background: var(--accent);
  	line-height: 0.8;
  	-webkit-transition: -webkit-transform 0.5s;
  	transition: -webkit-transform 0.5s;
  	transition: transform 0.5s;
  	transition: transform 0.5s, -webkit-transform 0.5s;
  }

  .link--ilin span:last-of-type::before {
  	background: var(--accent);
  }

  .link--ilin:hover span:last-of-type::before,
  .link--ilin span:first-of-type::before {
  	-webkit-transform: translate3d(0,-150%,0);
  	transform: translate3d(0,-150%,0);
  }

  .link--ilin:hover span:first-of-type::before,
  .link--ilin span:last-of-type::before {
  	-webkit-transform: translate3d(0,150%,0);
  	transform: translate3d(0,150%,0);
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
  	-webkit-transition: color 0.5s, -webkit-transform 0.5s;
  	transition: color 0.5s, -webkit-transform 0.5s;
  	transition: transform 0.5s, color 0.5s;
  	transition: transform 0.5s, color 0.5s, -webkit-transform 0.5s;
  }

  .link--yaku:hover span {
  	color: var(--accent);
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
  }
  .link--yaku span:nth-child(9),
  .link--yaku:hover span:nth-child(9) {
  	-webkit-transition-delay: 0.8s;
  	transition-delay: 0.8s;
  }
  .link--yaku span:nth-child(10),
  .link--yaku:hover span:nth-child(10) {
  	-webkit-transition-delay: 0.9s;
  	transition-delay: 0.9s;
  }
  .link--yaku span:nth-child(11),
  .link--yaku:hover span:nth-child(11) {
  	-webkit-transition-delay: 1s;
  	transition-delay: 1s;
  }
  .link--yaku span:nth-child(12),
  .link--yaku:hover span:nth-child(12) {
  	-webkit-transition-delay: 1.1s;
  	transition-delay: 1.1s;
  }
  .link--yaku span:nth-child(13),
  .link--yaku:hover span:nth-child(13) {
  	-webkit-transition-delay: 1.2s;
  	transition-delay: 1.2s;
  }
  .link--yaku span:nth-child(14),
  .link--yaku:hover span:nth-child(14) {
  	-webkit-transition-delay: 1.3s;
  	transition-delay: 1.3s;
  }
</style>
