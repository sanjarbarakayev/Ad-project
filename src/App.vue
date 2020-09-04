<template>
    <v-app>
      <v-navigation-drawer
        v-model="drawer"
        app
        absolute
        temporary
      >
        <v-list>
          <v-list-item
          v-for="(link, l) of links"
          :key="l"
          link
          :to="link.url"
        >
          <v-list-item-icon>
            <v-icon>{{link.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="link.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list> 
      </v-navigation-drawer>
      <v-app-bar
        app
        dark
        color="primary"
        pa-0
        >
          <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
          <v-toolbar-title>
            <router-link to="/" tag="span" class="pointer">Ad application</router-link>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn
            text
            link
            tile
            v-for="(link, l) in links"
            :key="l"
            height="100%"
            :to="link.url"
            class="hidden-sm-and-down"
          >
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>{{ link.title }}</v-list-item-content>
          </v-btn>
      </v-app-bar>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    links: [
      {title: 'Login', icon: 'mdi-lock', url: '/login'},
      {title: 'Registration', icon: 'mdi-face', url: '/registration'},
      {title: 'Orders', icon: 'mdi-bookmark-outline', url: '/orders'},
      {title: 'New ad', icon: 'mdi-file-plus-outline', url: '/new'},
      {title: 'My ads', icon: 'mdi-view-list', url: '/list'},
    ]
  }),
};
</script>

<style scoped>
.v-toolbar__content, .v-toolbar__extension {
  padding: 0px 16px;
}

.pointer {
  cursor: pointer;
}
</style>