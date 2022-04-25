<template>

 <v-container fluid grid-list-md>
    <v-layout wrap ma-4>
     
        <v-flex v-for="flightx in FlightsX" :key="flightx.id">
          
    
  
  <v-card
    
    class="mx-auto"
    max-width="400"
  >
   <v-img
      class="white--text align-end"
      height="200px"
     :src="`/thumbnails/${flightx.baseImageName}.jpg`"
     :srcset="`/thumbnails/${flightx.baseImageName}.jpg 1x,
                /thumbnails/${flightx.baseImageName}@2x.jpg 2x`"
               
              transition="false"
                    
                  ><v-card-title>{{ flightx.title }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      <div>{{ flightx.dateString }}</div>
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ flightx.content }}</div>

      <div>{{ flightx.content }} </div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>

  </v-flex>
     </v-layout>

  </v-container>
</template>
<!--
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
                    :src="`/thumbnails/${flightx.baseImageName}.jpg`"
                    :srcset="`/thumbnails/${flightx.baseImageName}.jpg 1x,
                             /thumbnails/${flightx.baseImageName}@2x.jpg 2x`"
                    height="80px"
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
  -->
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { BestFlights } from "@/types";

@Component
export default class FlightList extends Vue {
  @Prop({ type: Array, required: true }) FlightsX!: BestFlights[];
}
</script>
