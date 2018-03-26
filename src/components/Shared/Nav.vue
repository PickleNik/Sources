<template>
<v-card id="nav" class="elevation-0 hidden-sm-and-down ma-4 pa-2 roundXL">
  <v-card-actions>
    <v-layout>
    <v-flex style="max-width:11em;">
    <a v-for="nav in navs" :key="nav.name" href="#" v-scroll-to="{el:nav.href, offset: nav.offset}"><v-btn small round flat :to="nav.to"
      class="ma-0 pr-2 link link--kukuri">
      <v-icon left class="accent--text">{{ nav.icon }}</v-icon>
      {{ nav.name }}
      <v-icon>{{ nav.posticon }}</v-icon></v-btn></a>
    </v-flex>
    </v-layout>
  </v-card-actions>
</v-card>
</template>

<script>
export default{
  props: ['navs']
}
</script>

<style scoped>
#nav{
  position:fixed;
  left:0;
  top:1em;
  background: transparent;
  animation: zoomInLeft 1s linear 1;
}
.link {
	text-decoration: none;
	position: relative;
}

/* Kukuri */
.link--kukuri {
	text-transform: uppercase;
	font-weight: 900;
	overflow: hidden;
	line-height: 0.75;
	color: #fff;
}

.link--kukuri:hover {
	color: lightgreen;
}

.link--kukuri::after {
	content: '';
	position: absolute;
	height: 6px;
	width: 100%;
	top: 50%;
	margin-top: -4px;
	right: 0;
	background: lightgreen;
  border-radius:1em;
	-webkit-transform: translate3d(-111%,0,0);
	transform: translate3d(-111%,0,0);
	-webkit-transition: -webkit-transform 0.4s;
	transition: transform .3s;
	-webkit-transition-timing-function: cubic-bezier(0.7,0,0.3,1);
	transition-timing-function: cubic-bezier(0.7,0,0.3,1);
}

.link--kukuri:hover::after {
	-webkit-transform: translate3d(100%,0,0);
	transform: translate3d(100%,0,0);
}
.link--kukuri:hover::before {
	width: 100%;
}
</style>
