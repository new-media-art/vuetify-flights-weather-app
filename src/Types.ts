export interface BestFlights {
  id: number;
  title: string;
  content: string;
  dateString: string;
  baseImageName: string;
  flightType: FlightOption;
  isFavourite: boolean;
}

export enum FlightOption {
  TopFlight = "TOP_FLIGHT",
  FlightExample = "FLIGHT_EXAMPLE",
}

// Store root state
export interface RootState {
  topToolbar: TopToolbarState;
}

// Store modules state
export interface TopToolbarState {
  title: string;
}
