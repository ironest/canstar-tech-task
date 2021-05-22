import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { StateStats } from './shared/population.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  dataSource: StateStats[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.dataSource = this.dataService.getPopulationData();
  }

}
