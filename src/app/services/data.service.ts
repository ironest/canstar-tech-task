import { Injectable } from '@angular/core';
import { fakeData } from '../data/fake-data';
import { StateStats } from '../shared/population.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  // Ideally data should be fetched from an api
  getPopulationData(): StateStats[] {
    return fakeData.map((entry: StateStats) => {
      // Reducing the returned element up to 5 per each state
      return {
        state: entry.state,
        cities: entry.cities.slice(0, 5)
      };
    });
  }

}
