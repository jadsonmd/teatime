<template>
  <v-card color="grey lighten-4" flat tile>
    <v-toolbar dense>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Teatime</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer">
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <!-- <v-list-item-action>
              <v-list-item-icon>{{ link.icon }}</v-list-item-icon>
            </v-list-item-action> -->
          <v-list-item-content>
            <v-list-item-title>
              {{ link.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-bottom-sheet></v-bottom-sheet>

      <v-btn @click="drawer = !drawer"> Fechar </v-btn>

    </v-navigation-drawer>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      drawer: false,
      links: [
        { icon: 'dashboard', text: 'Dashboard', route: '/' },
        { icon: 'folder', text: 'Lista Produtos', route: '/listar' }
      ]
    }
  }
}
</script>
