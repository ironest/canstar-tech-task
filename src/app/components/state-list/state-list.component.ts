import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { DataService } from '../../services/data.service';
import { StateStats } from '../../shared/population.model';

@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.scss']
})
export class StateListComponent implements OnInit {

  dataSource$: Observable<StateStats[]>;

  // Injecting the service
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.dataSource$ = this.dataService.getPopulationData();
  }

}
