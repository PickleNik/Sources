<template>
  <div>
    <v-flex md2 class="hidden-sm-and-down" id="add"><v-btn disabled @click="open = !open" large round class="grey darken-3"><h2 class="grey--text">Add {{ add }}</h2></v-btn></v-flex>
    <v-dialog width="500" style="border-radius:3em;" v-model="open">
      <v-card class="pa-3">
        <v-card-title><h2 class="grey--text mx-auto">Add {{ add }}</h2></v-card-title>
        <v-card-text>
          <v-text-field dark color="accent"
          autofocus
          name="name"
          label="Name"
          v-model="this.name"
          prepend-icon="title"
          hint="What's the name of the source/video/article?"
          ></v-text-field>
          <v-text-field dark color="accent"
          name="link"
          label="Link"
          v-model="this.link"
          prepend-icon="link"
          hint="Copy and paste here the link to the source/video/article"
          ></v-text-field>
          <v-text-field dark color="accent"
          name="email"
          label="Email"
          v-model="this.email"
          prepend-icon="email"
          hint=""
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn class="mx-auto" color="accent" light round>Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  props: ['add'],
  data () {
    return {
      open: false,
      name: '',
      link: '',
      email: ''
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
