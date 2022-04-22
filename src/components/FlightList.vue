<template>
  <div>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 v-for="flightx in FlightsX" :key="flightx.id">
          <v-card>
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs9>
                  <div>
                    <div class="subheading font-weight-medium">
                      {{ flightx.title }}
                    </div>
                    <div>{{ flightx.dateString }}</div>
                  </div>
                </v-flex>
                <v-flex xs3>
                  <v-img
                    contain
                    :src="`/thumbnails/${flightx.baseImageName}.png`"
                    :srcset="`/thumbnails/${flightx.baseImageName}.png 1x,
                             /thumbnails/${flightx.baseImageName}@2x.png 2x`"
                    height="72px"
                    transition="false"
                  ></v-img>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { BestFlights } from "@/types";

@Component
export default class FlightList extends Vue {
  @Prop({ type: Array, required: true }) FlightsX!: BestFlights[];
}
</script>
