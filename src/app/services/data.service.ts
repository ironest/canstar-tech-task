import { Injectable } from '@angular/core';
import { fakeData } from '../data/fake-data';

export interface IPopulationEntry {
  id: number;
  city: string;
  population: number;
  state: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getPopulationData(): IPopulationEntry[] {
    return fakeData;
  }

}
