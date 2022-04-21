import { FlightType, MyFlights } from '../Types';

class FlightsService {

  getFlightsByType(FlightType: FlightType): Promise<MyFlights[]> {

    return fetch('/data/flights.json')
      .then((response) => {
        return response.json();
      })
      .then((serverFlights) => {

        const myFlights = serverFlights
          .filter((serverFlight: any) => serverFlight.FlightType === FlightType)
          .map((serverFlight: any) => {
            return {
              id: serverFlight.id,
              title: serverFlight.title,
              content: serverFlight.content,
              dateString: serverFlight.dateString,
              baseImageName: serverFlight.baseImageName,
              FlightType: serverFlight.FlightType,
              isFavourite: serverFlight.isFavourite
            } as MyFlights;
          });

        return myFlights;
      });
  }
}

export default new FlightsService();