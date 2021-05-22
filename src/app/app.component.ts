import { Component, OnInit } from '@angular/core';
import { DataService, IPopulationEntry } from './services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  datasource: IPopulationEntry[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.datasource = this.dataService.getPopulationData();
  }

}
