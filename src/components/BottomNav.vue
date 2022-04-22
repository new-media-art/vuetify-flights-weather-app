<template>

  <v-bottom-navigation
    app
    fixed
    grow
    v-model="activeItem"
    color="primary"
  >
    <v-btn value="top" :to="{ path: '/'}">
      <span>Top Flights</span>
      <v-icon>airplane_ticket</v-icon>
    </v-btn>

    <v-btn value="code" :to="{ name: 'sunny-flight'}">
      <span>Follow the Sun</span>
      <v-icon>wb_sunny</v-icon>
    </v-btn>

    <v-btn value="favorites" :to="{ name: 'my-favorites'}">
      <span>Favorites</span>
      <v-icon>favorite</v-icon>
    </v-btn>
  </v-bottom-navigation>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BottomNav extends Vue {
  activeItem = 'top';
}
</script>

<style scoped>
  .v-btn {
    letter-spacing: normal;
  }
</style>
