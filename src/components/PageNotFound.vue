<template>
    <v-container id="main" fluid fill-height>
        <v-flex class="text-xs-center text-sm-center text-md-center">
          <h1 class="primary--text"style="font-size:4em;">Error 404</h1>
          <p class="primary--text typed" style="font-size:2em;"><span id="areyoulostbot" class="white--text"></span></p>
        </v-flex>
      <vue-particles
      class="fillX centerABS"
      height="99%"
      color="#eee"
      :particleOpacity=".1"
      :particlesNumber="22"
      shapeType="edge"
      :particleSize="22"
      :lineLinked="false"
      :moveSpeed="1"
      :hoverEffect="true"
      hoverMode="repulse"
      :clickEffect="false"
      ></vue-particles>
    </v-container>
</template>

<script>
import Typed from 'typed.js'

export default {
  data () {
    return {
      typedOptions: [
      'Howdy traveller',
      'This is not page you were looking for',
      'Probably',
      'Unless you were looking for this error page',
      'Congratulations! You found it',
      'It\'s time to leave',
      'What are you waiting for?',
      'I can stay here for hours',
      'Can you?',
      'Don\'t waste your time',
      'Overachiever',
      'Congratulations, you\'ve reached the end.',
      'Are you still here?',
      '-_- I\'m watching you -_-']
    }
  },
 mounted () {
    let typed = new Typed('#areyoulostbot', {
      strings: this.typedOptions,
      typeSpeed: 11,
      backSpeed: 11,
      backDelay: 4444,
      smartBackspace: true,
      showCursor: false
    })
  }
}
</script>

<style scoped>
#main{
  background: url('https://images.unsplash.com/photo-1494376877685-d3d2559d4f82?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=57a67cd508074eb9f10cf0da30c6db23&auto=format&fit=crop&w=1950&q=80') 100% 100% no-repeat;
  background-size: cover;
}
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
</style>
