<template>
  <div>
      <v-navigation-drawer
      app
      fixed
      v-model="showMenu"

      >
        <v-list dense>
            <v-list-item @click="doNothing">
                <v-list-action>
                    <v-icon>sunny_snowing</v-icon>
                </v-list-action>
                <v-list-item-content>
                    <v-list-item-title>Weather</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item @click="doNothing">
                <v-list-item-action>
                    <v-icon>flight_land</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>flight</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
      </v-navigation-drawer>

         <v-app-bar
            app
            fixed
            dark
            color="primary"
        >

      <v-app-bar-nav-icon @click.stop="toggleMenu"></v-app-bar-nav-icon>

      <v-toolbar-title>Flights and Weather</v-toolbar-title>

      </v-app-bar>

  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'


    @Component
    export default class TopToolbar extends Vue {
        showMenu: boolean = false;

        toggleMenu(): void {
            this.showMenu = !this.showMenu;
        }

        doNothig(): void {

        }
    }
</script>

<style>

</style>