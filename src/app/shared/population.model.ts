export interface CityStats {
  id: number;
  city: string;
  population: number;
}

export interface StateStats {
  state: string;
  cities: CityStats[];
}
