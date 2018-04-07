<template lang="html">
  <main>
    <v-container fluid fill-height>
      <v-layout align-center column class="pa-5 ma-5">
        <v-flex>
          <p class="pink--text">*Go away, this page is not ready!</p>
        </v-flex>
        <v-flex xs12 class="mt-5 text-sm-center text-xs-center">

              <card3d @click.native="dialog = true" class="mt-5 mb-0 card3d hidden-xs-only d-inline-block" style="border-radius:100%; width:28em; height:28em;" data-image="https://images.unsplash.com/photo-1512723185835-0700e5069a9a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8d4b1d058305366942842e462844ee7d&auto=format&fit=crop&w=1868&q=80">
                <h1 slot="header" class="mb-5 orange--text"><h4>{{ username }}</h4></h1>
                <p slot="content" class="mb-5">{{ userbio }}</p>
              </card3d>


              <card3d @click.native="dialog = true" class="mt-5 mb-0 card3d hidden-sm-and-up d-inline-block" style="border-radius:100%; width:18em; height:18em;" data-image="https://images.unsplash.com/photo-1512723185835-0700e5069a9a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8d4b1d058305366942842e462844ee7d&auto=format&fit=crop&w=1868&q=80">
                <h1 slot="header" class="mb-5 orange--text"><h4>{{ username }}</h4></h1>
                <p slot="content" class="mb-5">{{ userbio }}</p>
              </card3d>

        </v-flex>
      </v-layout>

      <v-dialog
        v-model="dialog"
        fullscreen
        transition="fade-transition"
        :overlay="false"
        scrollable>
        <v-card tile class="secondary">

          <v-toolbar card dense class="pa-3 pr-5 pl-5" dark color="secondary">
            <v-spacer></v-spacer>
            <v-btn fab flat style="border:1px solid red;" class="red--text" @click.native="dialog = false" dark>
              <v-icon>close</v-icon>
            </v-btn>

              <v-toolbar-title class="ml-5 mr-5"><v-icon class="ma-3">edit</v-icon>Edit Profile<v-icon class="ma-3">format_paint</v-icon></v-toolbar-title>

              <v-toolbar-items>
                <v-btn dark round flat style="border:1px solid lightgreen;" class="lime--text" @click.native="dialog = false">Save</v-btn>
              </v-toolbar-items>
              <v-spacer></v-spacer>
          </v-toolbar>

          <v-layout row wrap class="pr-5 pl-5">
            <v-flex sm4>

              <v-text-field dark color="primary"
              counter="10"
              name="username"
              label="Username"
              style="width:121%;"
              v-model="username"
              prepend-icon="face"
              hint="Who are you?"
              ></v-text-field>

              <v-text-field dark color="primary"
              name="email"
              label="Email"
              style="width:111%;"
              v-model="this.email"
              prepend-icon="email"
              hint="We'll not send spam, unless you'd like to."
              ></v-text-field>

              <v-text-field dark color="primary"
              name="emailconfirm"
              label="Email Confirm"
              style="width:101%;"
              v-model="this.email"
              prepend-icon="verified_user"
              hint="We'll not send spam, unless you'd like to."
              ></v-text-field>

              <v-text-field dark color="primary"
              name="password"
              label="Password"
              style="width:101%;"
              v-model="this.password"
              prepend-icon="lock"
              hint="No hackers!"
              ></v-text-field>

              <v-text-field dark color="primary"
              name="confirm"
              label="Password Confirm"
              style="width:111%;"
              v-model="this.confirm"
              prepend-icon="done_all"
              hint="Didn't you make a typo?"
              ></v-text-field>

              <v-text-field dark color="primary"
              name="confirm"
              label="Bio"
              style="width:121%;"
              v-model="userbio"
              prepend-icon="mode_comment"
              hint="Describe your-self shortly."
              ></v-text-field>

            </v-flex>

            <v-flex sm4 class="text-sm-center text-xs-center">
              <card3d id="imageinput" v-if="dialog == true" class="ma-0 mt-4 card3d hidden-xs-only d-inline-block" style="border-radius:100%; width:28em; height:28em; z-index:228;" data-image="https://images.unsplash.com/photo-1512723185835-0700e5069a9a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8d4b1d058305366942842e462844ee7d&auto=format&fit=crop&w=1868&q=80">
                <h1 slot="header" class="mb-5 amber--text"><h4>{{ username }}</h4></h1>
                <p slot="content" class="mb-5">{{ userbio }}</p>
              </card3d>
            </v-flex>

            <v-flex sm4>
              <v-text-field dark color="primary"
              counter="10"
              name="username"
              label="Username"
              v-model="this.username"
              prepend-icon="face"
              hint="Who are you?"
              ></v-text-field>

              <v-select dark class="grey roundXL"
                label="Show me what you've got!"
                chips
                tags
                solo
                prepend-icon="filter_list"
                append-icon=""
                clearable
                v-model="chips"
              >
                <template slot="selection" slot-scope="data">
                  <v-chip class="white--text"
                    close dark :color="color"
                    @input="remove(data.item)"
                    :selected="data.selected"
                  >
                    <strong>{{ data.item }}</strong>&nbsp;
                  </v-chip>
                </template>
              </v-select>

            </v-flex>
          </v-layout>

        </v-card>
      </v-dialog>

    </v-container>
  </main>
</template>

<script>
export default {
  data () {
    return {
      color: 'black',
      dialog: false,
      plan: false,
      username: 'Pickle',
      userbio: 'Designer',
      password: '123456',
      connfirm: '',
      chips: ['HTML', 'CSS', 'JavaScript', 'Vue.js']
    }
  },
  methods: {
    remove (item) {
      this.chips.splice(this.chips.indexOf(item), 1)
      this.chips = [...this.chips]
    }
  }
}
</script>

<style lang="css" scoped>
main{
  background: linear-gradient(-45deg, #111, #222, #333, #444);
	background-size: 400% 400%;
	-webkit-animation: Gradient 22s ease infinite;
	-moz-animation: Gradient 22s ease infinite;
	animation: Gradient 22s ease infinite;
  width: 100vw;
}
.card3d{
  animation: fadeIn .5s linear 1;
}
#imageinput:hover{
  transition-duration: 1s;
  transition-property: all;
}
</style>
