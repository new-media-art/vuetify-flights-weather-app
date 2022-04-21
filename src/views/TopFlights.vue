<template>
    <div>
        <NewList :myFlights="myFlights"></NewList>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import flightService from '../services/flightService'
import NewList from '../components/NewList.vue'
import { FlightType, MyFlights } from '../Types';



@Component({
    components: {
        NewList
    }
})
export default class TopFlights extends Vue {
    myFlights: MyFlights[] = [];

    mounted() {
        flightService.getFlightsByType(FlightType.TopFlight)
        .then((myFlights: MyFlights[]) => {
            this.myFlights = myFlights
        })
    }
}
</script>

