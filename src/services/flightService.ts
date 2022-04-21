import { FlightOption, BestFlights } from "@/types";

const url = "/data/flights.json";

class FlightService {
  getFlights(flightType: FlightOption): Promise<BestFlights[]> {
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((serverFlights) => {
        const FlightsX = serverFlights
          .filter((serverFlight: any) => serverFlight.flightType === flightType)
          .map(FlightService.map);

        return FlightsX;
      })
      .catch((e) => {
        console.error(
          "An error occurred retrieving the flights from " + url,
          e
        );
      });
  }

  getFavorites(): Promise<BestFlights[]> {
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((serverFlights) => {
        const FlightsX = serverFlights
          .filter((serverFlight: any) => serverFlight.isFavourite === true)
          .map(FlightService.map);

        return FlightsX;
      })
      .catch((e) => {
        console.error(
          "An error occurred retrieving the flights from " + url,
          e
        );
      });
  }

  private static map(serverFlight: any): BestFlights {
    return {
      id: serverFlight.id,
      title: serverFlight.title,
      content: serverFlight.content,
      dateString: serverFlight.dateString,
      baseImageName: serverFlight.baseImageName,
      flightType: serverFlight.flightType,
      isFavourite: serverFlight.isFavourite,
    } as BestFlights;
  }
}

export default new FlightService();
