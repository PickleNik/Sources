<template>
<v-flex md2 lg2 id="nav" class="zoom hidden-sm-and-down mt-4 pa-3">
    <v-layout column>
    <a v-for="nav in navs" :key="nav.name" href="#" v-scroll-to="{el:nav.href, offset: nav.offset}">
      <v-btn small round flat :to="nav.to" class="ma-0 pr-2 link link--kukuri">
        <v-icon left class="accent--text">{{ nav.icon }}</v-icon>
        {{ nav.name }}
        <v-icon>{{ nav.posticon }}</v-icon>
      </v-btn>
    </a>
    </v-layout>
</v-flex>
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
  color: var(--primary);
}

.link--kukuri:hover {
	color: var(--accent);
}

.link--kukuri::after {
	content: '';
	position: absolute;
	height: 6px;
	width: 100%;
	top: 50%;
	margin-top: -4px;
	right: 0;
	background: var(--accent);
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
