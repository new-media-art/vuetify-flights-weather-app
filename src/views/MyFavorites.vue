<template>
  <div>
    <FlightList :FlightsX="FlightsX"></FlightList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import flightService from "../services/flightService";
import FlightList from "../components/FlightList.vue";
import { BestFlights } from "@/types";

@Component({
  components: {
    FlightList,
  },
})
export default class TopFlights extends Vue {
  FlightsX: BestFlights[] = [];

  mounted() {
    flightService.getFavorites().then((FlightsX: BestFlights[]) => {
      this.FlightsX = FlightsX;
    });
  }
}
</script>
