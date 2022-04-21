import { FlightType, MyFlights } from '@/Types';

const url = '/data/flights.json';

class flightService {
  getFlightsByType (FlightType: FlightType): Promise<MyFlights[]> {
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((serverFlights) => {
        const MyFlightss = serverFlights
          .filter((serverFlight: any) => serverFlight.FlightType === FlightType)
          .map(flightService.map);

        return MyFlightss;
      })
      .catch((e) => {
        console.error('An error occurred retrieving the flights from ' + url, e);
      });
  }

  getFavorites (): Promise<MyFlights[]> {
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((serverFlights) => {
        const MyFlights = serverFlights
          .filter((serverFlight: any) => serverFlight.isFavourite === true)
          .map(flightService.map);

        return MyFlights;
      })
      .catch((e) => {
        console.error('An error occurred retrieving the news articles from ' + url, e);
      });
  }

  private static map (serverFlight: any): MyFlights {
    return {
      id: serverFlight.id,
      title: serverFlight.title,
      content: serverFlight.content,
      dateString: serverFlight.dateString,
      baseImageName: serverFlight.baseImageName,
      flightType: serverFlight.FlightType,
      isFavourite: serverFlight.isFavourite
    } as MyFlights;
  }
}

export default new flightService();