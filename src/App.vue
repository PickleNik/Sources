<template>
  <v-app dark>
    <v-toolbar dark flat fixed class="transparent hidden-sm-and-down pl-4" style="min-width:100vw;">

      <v-toolbar-title id="name" class="ml-0 round"><router-link to="/" tag="span" class="link--ilin"><span><icon class="mx-1 accent--text" name="tree" scale="1.5"></icon>Tuts</span><span>Tree<icon class="mx-1 accent--text" name="terminal" scale="1.5"></icon></span></router-link></v-toolbar-title>
      <v-spacer></v-spacer>

        <v-tooltip bottom><span>Sources</span><v-btn slot="activator" color="primary" flat fab to="/sources" class="zoom ma-0"><v-icon dark>local_library</v-icon></v-btn></v-tooltip>
        <v-tooltip bottom><span>Tree</span><v-btn slot="activator" color="primary" flat fab to="/tree" class="zoom ma-0"><v-icon dark>device_hub</v-icon></v-btn></v-tooltip>
        <v-tooltip bottom><span>You</span><v-btn slot="activator" color="primary" flat fab to="/profile" class="zoom ma-0"><v-icon dark>person</v-icon></v-btn></v-tooltip>

    </v-toolbar>

    <v-bottom-nav
      class="hidden-md-and-up"
      fixed shift
      style="z-index:99999;"
      value="true"
      height="60" app
      :active.sync="e2"
      color="secondary">
      <v-btn to="/" color="accent--text">
        <span>Home</span>
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn to="/sources" color="accent--text">
        <span>Sources</span>
        <v-icon>local_library</v-icon>
      </v-btn>
      <v-btn to="/tree" color="accent--text">
        <span>Tree</span>
        <v-icon>device_hub</v-icon>
      </v-btn>
      <v-btn to="/profile" color="accent--text">
        <span>You</span>
        <v-icon>person</v-icon>
      </v-btn>
      <v-btn disabled color="accent--text">
        <span>Scroll</span>
        <v-icon>menu</v-icon>
      </v-btn>
    </v-bottom-nav>

    <a style="position:fixed;right:1em;top:8em;z-index:1;" class="zoom hidden-sm-and-down copyrighted-badge" title="Copyrighted.com Registered, Protected &amp; Monitored" target="_blank" href="https://www.copyrighted.com/website/dS8B0bc4ACr280Uw"><img class="round" alt="Copyrighted.com Registered &amp; Protected" border="0" width="125" height="75" srcset="https://static.copyrighted.com/badges/125x75/04_2x.png 2x" src="https://static.copyrighted.com/badges/125x75/04.png" /></a>
    <a style="position:fixed;right:1em;top:14em;z-index:1;" class="zoom hidden-sm-and-down grey darken-2 round py-2 px-1" target="_blank" href="https://app.termly.io/document/privacy-policy/cfd2389e-89ab-4341-882a-dd5ed79e213b"><v-icon class="accent--text">verified_user</v-icon><span class="contact">Privacy Policy</span></a>
    <v-flex xs2 style="position:fixed;right:1em;top:27em;z-index:1;">
      <v-switch class="mr-5 pa-0"
      v-model="theme" color="accent"
      prepend-icon="brightness_7"
      append-icon="brightness_2"
      hint="Change theme"
      persistent-hint
      ></v-switch>
    </v-flex>
    <!-- <v-content> -->
    <router-view></router-view>
    <!-- </v-content> -->
  </v-app>
</template>

<script>
export default {
  data: () => ({
    e2: 1,
    theme: false
  }),
  computed: {
    themeChange () {
      this.$vuetify.theme.primary = '#333'
      this.$vuetify.theme.secondary = '#eee'
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
  :root{
    --primary: #eee;
    --secondary: #333;
    --accent: #90ee90;
  }
  .theme-light{
    --primary: #333;
    --secondary: #eee;
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

  .centerX{margin-left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);}
  .centerXabs{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);}

  .centerY{margin-top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);}
  .centerYabs{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);}

  .center{margin-top:50%;margin-left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}
  .centerABS{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}

  /*scrollbar*/
  ::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: inherit;
  }
  ::-webkit-scrollbar{
    width: 8px;
    background-color:var(--secondary);
  }
  ::-webkit-scrollbar-thumb{
    border-radius: 20px;
    background-color: var(--accent);
  }
  ::-webkit-scrollbar-thumb:hover{
    background:  var(--primary);
  }
  ::-webkit-scrollbar-thumb:active {
    background: white;
  }
  ::-moz-selection{
    background: transparent;
    color: var(--accent);
  }
  ::selection{
    background: transparent;
    color: var(--accent);
  }
  @-webkit-keyframes zoomIn {
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
    -webkit-animation: zoomIn .5s ease 1 forwards;
            animation: zoomIn .5s ease 1 forwards;
  }
  #name{  -webkit-transition-duration: 1s;  transition-duration: 1s;  -webkit-transition-property: all;  transition-property: all; cursor:pointer; }

  .contact:hover {
    color: var(--accent);
    cursor:pointer;
    text-decoration:underline;
  }
  @-webkit-keyframes bounce {
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
    -webkit-animation: bounce 1s linear;
            animation: bounce 1s linear;
  }

  @-webkit-keyframes pulse {
    from {
      -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
    }

    50% {
      -webkit-transform: scale3d(1.05, 1.05, 1.05);
              transform: scale3d(1.05, 1.05, 1.05);
    }

    to {
      -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
    }
  }

  @keyframes pulse {
    from {
      -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
    }

    50% {
      -webkit-transform: scale3d(1.05, 1.05, 1.05);
              transform: scale3d(1.05, 1.05, 1.05);
    }

    to {
      -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
    }
  }
  .pulse{
    -webkit-animation: pulse .5s linear;
            animation: pulse .5s linear;
  }
  @-webkit-keyframes Gradient {
  	0% {
  		background-position: 0% 50%;
  	}
  	50% {
  		background-position: 100% 50%;
  	}
  	100% {
  		background-position: 0% 50%;
  	}
  }
  @keyframes Gradient {
  	0% {
  		background-position: 0% 50%;
  	}
  	50% {
  		background-position: 100% 50%;
  	}
  	100% {
  		background-position: 0% 50%;
  	}
  }
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadeInDown {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, -10%, 0);
              transform: translate3d(0, -10%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
              transform: none;
    }
  }
  @keyframes fadeInDown {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, -10%, 0);
              transform: translate3d(0, -10%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
              transform: none;
    }
  }
  @-webkit-keyframes rollIn {
    from {
      opacity: 0;
      -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
              transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
              transform: none;
    }
  }
  @keyframes rollIn {
    from {
      opacity: 0;
      -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
              transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
              transform: none;
    }
  }
  @-webkit-keyframes rubberBand {
    from {
      -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
    }

    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
              transform: scale3d(1.25, 0.75, 1);
    }

    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
              transform: scale3d(0.75, 1.25, 1);
    }

    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
              transform: scale3d(1.15, 0.85, 1);
    }

    65% {
      -webkit-transform: scale3d(.95, 1.05, 1);
              transform: scale3d(.95, 1.05, 1);
    }

    75% {
      -webkit-transform: scale3d(1.05, .95, 1);
              transform: scale3d(1.05, .95, 1);
    }

    to {
      -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
    }

  }
  @keyframes rubberBand {
    from {
      -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
    }

    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
              transform: scale3d(1.25, 0.75, 1);
    }

    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
              transform: scale3d(0.75, 1.25, 1);
    }

    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
              transform: scale3d(1.15, 0.85, 1);
    }

    65% {
      -webkit-transform: scale3d(.95, 1.05, 1);
              transform: scale3d(.95, 1.05, 1);
    }

    75% {
      -webkit-transform: scale3d(1.05, .95, 1);
              transform: scale3d(1.05, .95, 1);
    }

    to {
      -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
    }

  }

  @-webkit-keyframes bounceIn {
    from, 20%, 40%, 60%, 80%, to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
              animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    0% {
      opacity: 0;
      -webkit-transform: scale3d(.3, .3, .3);
              transform: scale3d(.3, .3, .3);
    }

    20% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
              transform: scale3d(1.1, 1.1, 1.1);
    }

    40% {
      -webkit-transform: scale3d(.9, .9, .9);
              transform: scale3d(.9, .9, .9);
    }

    60% {
      opacity: 1;
      -webkit-transform: scale3d(1.03, 1.03, 1.03);
              transform: scale3d(1.03, 1.03, 1.03);
    }

    80% {
      -webkit-transform: scale3d(.97, .97, .97);
              transform: scale3d(.97, .97, .97);
    }

    to {
      opacity: 1;
      -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
    }
  }

  @keyframes bounceIn {
    from, 20%, 40%, 60%, 80%, to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
              animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    0% {
      opacity: 0;
      -webkit-transform: scale3d(.3, .3, .3);
              transform: scale3d(.3, .3, .3);
    }

    20% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
              transform: scale3d(1.1, 1.1, 1.1);
    }

    40% {
      -webkit-transform: scale3d(.9, .9, .9);
              transform: scale3d(.9, .9, .9);
    }

    60% {
      opacity: 1;
      -webkit-transform: scale3d(1.03, 1.03, 1.03);
              transform: scale3d(1.03, 1.03, 1.03);
    }

    80% {
      -webkit-transform: scale3d(.97, .97, .97);
              transform: scale3d(.97, .97, .97);
    }

    to {
      opacity: 1;
      -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
    }
  }
  .bounceIn {
    -webkit-animation: bounceIn 1s linear 1;
            animation: bounceIn 1s linear 1;
  }
  .rubberBand {
    -webkit-animation: rubberBand 1s linear 1;
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
