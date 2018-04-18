<template>
  <div>
    <v-btn @click="open = !open" id="add" large round class="hidden-sm-and-down grey darken-3"><h2 class="grey--text">Add {{ add }}</h2></v-btn>
    <v-dialog width="500" v-model="open">
      <v-card >
        <v-card-title>Add {{ add }}</v-card-title>
        <v-card-text></v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  props: ['add'],
  data () {
    return {
      open: false
    }
  }
}
</script>

<style lang="css">
#add{
  position:fixed;
  top:5em;
  right:1em;
}
</style>
