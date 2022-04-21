<template>
  <div>

    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 v-for="myFlight in MyFlights" :key="myFlight.id">
          <v-card>
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs9>
                  <div>
                    <div class="subheading font-weight-medium">
                      {{  myFlight.title }}
                    </div>
                    <div>myFlight.dateString</div>
                  </div>
                </v-flex>
                <v-flex xs3>
                  <v-img
                    contain
                    :src="`/thumbnails/${myFlight.baseImageName}.png`"
                    :srcset="`/thumbnails/${myFlight.baseImageName}.png 1x,
                             /thumbnails/${myFlight.baseImageName}@2x.png 2x`"
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
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { MyFlights } from '../Types';
  @Component
  export default class NewList extends Vue {
    @Prop({ type: Array, required: true }) myFlights!: MyFlights[];
  }
</script>