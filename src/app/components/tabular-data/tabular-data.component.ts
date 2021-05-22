import { Component, OnInit, Input } from '@angular/core';
import { IPopulationEntry } from 'src/app/services/data.service';

@Component({
  selector: 'app-tabular-data',
  templateUrl: './tabular-data.component.html',
  styleUrls: ['./tabular-data.component.scss']
})
export class TabularDataComponent implements OnInit {

  @Input() dataSource: IPopulationEntry[];

  columnNames: string[] = ['id', 'city', 'population', 'state'];

  constructor() { }

  ngOnInit(): void {
  }

}
