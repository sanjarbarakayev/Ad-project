<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Add List</h1>
        <v-card elevation="10" class="mb-3" v-for="(ad, a) in myads" :key="a">
          <v-layout row>
            <v-flex xs4>
              <v-img :src="ad.imageSrc" height="160px"></v-img>
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <h2 class="text--primary">{{ ad.title }}</h2>
                <p>{{ ad.description }}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :to="'/ad/' + ad.id" class="info mr-4">Open</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    myads () {
      return this.$store.getters.myAds
    }
  }
};
</script>