import { Injectable } from '@angular/core';
import { fakeData } from '../data/fake-data';
import { StateStats } from '../shared/population.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getPopulationData(): StateStats[] {
    return fakeData;
  }

}
