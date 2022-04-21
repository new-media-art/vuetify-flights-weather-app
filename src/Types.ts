export interface MyFlights {
    id: number;
    title: string;
    content: string;
    dateString: string;
    baseImageName: string;
    FlightType: FlightType;
    isFavourite: boolean;
  }
  
  export enum FlightType {
    TopFlight = 'TOP_FLIGHT',
    TopWeather = 'TOP_WEATHER'
  }

  // Store root state
export interface RootState {
    topToolbar: TopToolbarState;
  }
  
  // Store modules state
  export interface TopToolbarState {
    title: string;
  }