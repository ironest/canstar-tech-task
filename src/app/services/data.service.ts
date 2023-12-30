import { Injectable } from '@angular/core';
import { StateStats } from '../shared/population.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';

const API_URL = '/assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPopulationData(): Observable<StateStats[]> {

    // returns an Observable of StateStats[]
    return this.http.get<StateStats[]>(API_URL)
      .pipe(
        // if ever fails, retry up to 3 times
        retry(3),
        // When data comes back I want to do only get the top 5 for each state
        map((data) => {
          return data.map((entry) => {
            return {
              state: entry.state,
              cities: entry.cities.slice(0, 5)
            };
          });
        })
      );
  }

}
