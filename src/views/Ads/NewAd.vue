<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Creat new Ad</h1>
        <v-form v-model="valid" ref="form" validation class="mb-3">
          <v-text-field
            label="Ad title"
            name="title"
            type="text"
            v-model="title"
            required
            :rules="[ v => !!v || 'Title is required' ]"
          ></v-text-field>

          <v-textarea
            label="Description"
            name="description"
            type="text"
            v-model="description"
            multi-line
            :rules="[ v => !!v || 'Description is required' ]"
          ></v-textarea>
        </v-form>
        <v-layout row mb-3>
          <v-flex xs12>
            <v-btn color="warning" class="ma-2 white--text" @click="loader = 'loading3'">
              Upload
              <v-icon right dark>mdi-cloud-upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <img src alt height="100px" />
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <v-switch v-model="promo" label="Add to promo?"></v-switch>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn :disabled="!valid" color="success" @click="createAd">Create ad</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: "",
    description: "",
    promo: false,
    valid: false,
  }),
  methods: {
    createAd() {
      if (this.$refs.form.validate()) {
        ///logic
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          imageSrc: 'https://media.proglib.io/wp-uploads/2018/07/1_qnI8K0Udjw4lciWDED4HGw.png'
        };
        this.$store.dispatch('createAd', ad)
      }
    },
  },
};
</script>