<template>
  <v-app>
    <v-toolbar dark flat fixed dense class="transparent hidden-sm-and-down pl-4" style="min-width:100vw;">

      <v-toolbar-title id="name" class="ml-0 mt-3 round"><router-link to="/" tag="span" class="link--ilin"><span><v-icon class="mr-1 accent--text">weekend</v-icon>Sou</span><span>rce<v-icon class="ml-1 accent--text">laptop_mac</v-icon></span></router-link></v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="secondary roundL">
        <v-tooltip bottom><span>Source</span><v-btn slot="activator" color="primary" flat fab to="/sources"><v-icon dark>local_library</v-icon></v-btn></v-tooltip>
        <v-tooltip bottom><span>Tree</span><v-btn slot="activator" color="primary" flat fab to="/tree"><v-icon dark>device_hub</v-icon></v-btn></v-tooltip>
        <v-tooltip bottom><span>You</span><v-btn slot="activator" color="primary" flat fab to="/profile"><v-icon dark>person</v-icon></v-btn></v-tooltip>
      </v-toolbar-items>

    </v-toolbar>

      <v-bottom-nav
      class="hidden-md-and-up"
      fixed
      shift
      value="true"
      :active.sync="e2"
      color="secondary"
      >
      <v-btn dark to="/">
        <span>Home</span>
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn dark to="/sources">
        <span>Sources</span>
        <v-icon>local_library</v-icon>
      </v-btn>
      <v-btn dark to="/tree">
        <span>Tree</span>
        <v-icon>device_hub</v-icon>
      </v-btn>
      <v-btn dark to="/profile" disabled>
        <span>You</span>
        <v-icon>person</v-icon>
      </v-btn>
    </v-bottom-nav>

    <router-view></router-view>

  </v-app>
</template>

<script>
export default {
  data: () => ({
   e2: 1
  })
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat|Nunito|Rammetto+One');
@import url('https://fonts.googleapis.com/css?family=Comfortaa|Quicksand');
*{
  font-family: 'Comfortaa', sans-serif;
}
a{
  text-decoration:none;
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

.centerX{margin-left:50%;transform:translateX(-50%);}
.centerXabs{left:50%;transform:translateX(-50%);}

.centerY{margin-top:50%;transform:translateY(-50%);}
.centerYabs{top:50%;transform:translateY(-50%);}

.center{margin-top:50%;margin-left:50%;transform:translate(-50%,-50%);}
.centerABS{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}

/*scrollbar*/
::-webkit-scrollbar-track{
  border-radius: 10px;
  background-color: inherit;
}
::-webkit-scrollbar{
  width: 8px;
  background-color:#333;
}
::-webkit-scrollbar-thumb{
  border-radius: 20px;
  background-color: lightgreen;
}
::-webkit-scrollbar-thumb:hover{
  background:  #ededed;
}
::-webkit-scrollbar-thumb:active {
  background: #fefefe;
}
::selection{
  background: transparent;
  color: lightgreen;
}
#name{  transition-duration: 1s;  transition-property: all; cursor:pointer; }

.contact:hover {
  color: lightgreen;
  cursor:pointer;
  text-decoration:underline;
}
@keyframes bounce {
  from, 20%, 53%, 80%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
}
.bounce{
  animation: bounce 1s linear;
}

@keyframes pulse {
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
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
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -10%, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
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
	color: #fff;
}

.link--ilin span {
	position: relative;
	display: inline-block;
	-webkit-transition: color 0.5s;
	transition: color 0.5s;
}

.link--ilin:hover span{
	color: lightgreen;
}

.link--ilin span::before {
	content: '';
	position: absolute;
	width: 100%;
	height: 100%;
	background: lightgreen;
	line-height: 0.8;
	-webkit-transition: -webkit-transform 0.5s;
	transition: transform 0.5s;
}

.link--ilin span:last-of-type::before {
	background: lightgreen;
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
</style>
