<template>
<v-btn id="add" large round class="hidden-sm-and-down grey darken-3"><h2 class="grey--text">Add {{ add }}</h2></v-btn>
</template>
<script>
export default {
  props: ['add']
}
</script>

<style lang="css">
#add{
  position:fixed;
  top:5em;
  right:1em;
}
</style>
