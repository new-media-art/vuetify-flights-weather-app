<template>
  <v-bottom-navigation
    app
    fixed
    grow
    v-model="activeItem"
    color="primary"
  >
    <v-btn value="topF" :to="{ path: '/' }">
      <span>Top Flights</span>
      <v-icon>flight_takeoff</v-icon>
    </v-btn>

    <v-btn value="topW" :to="{ name: 'top-weather' }">
      <span>Top Weather</span>
      <v-icon>sunny</v-icon>
    </v-btn>

    <v-btn value="favorites" :to="{ name: 'my-favorites' }">
      <span>Favorites</span>
      <v-icon>favorite</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
    
    @Component
    export default class BottomNav extends Vue {
        activeItem: string = 'topF';
    }

</script>

