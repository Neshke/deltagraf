<template>
<nav style="position:fixed">
      <v-app-bar-nav-icon large color="grey--text" class="hidden-md-and-up" @click="drawer = !drawer" ></v-app-bar-nav-icon>
      <v-toolbar class="hidden-md-and-down"  flat  >
          <v-tabs align-with-title align="center">
          <v-tab height="100%" light>Tab 1</v-tab>
          <v-tab dark>Tab 1</v-tab>
          <v-tab light>Tab 1</v-tab>
        </v-tabs>
      </v-toolbar>
      <v-navigation-drawer app v-model="drawer"  color="indigo" >
          <v-list>
              <v-list-item v-for="link in links" :key="link.text">
                  <v-list-item-action>
                      <v-icon class="white--text">{{link.icon}}</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                      <v-list-item-title class="white--text" >{{link.text}}</v-list-item-title>
                  </v-list-item-content>
              </v-list-item>
          </v-list>
      </v-navigation-drawer>
      </nav>
</template>

<script>
export default {
    data() {
        return{
            drawer:false,
            links:[
                { icon: 'home', text: 'Početna', route: '/' },
                { icon: 'info', text: 'O nama', route: '/about' },
                { icon: 'fact_check', text: 'Reference', route: '/references' },
                { icon: 'contact_page', text: 'Kontakt', route: '/contact' },
            ]
        }
    }
}
</script>

<style>
.no-border-radius{
    border-radius: 0px;
    margin:0%;
}
</style>