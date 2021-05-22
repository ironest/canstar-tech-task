import { Component, OnInit, Input } from '@angular/core';
import { StateStats } from 'src/app/shared/population.model';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  @Input() dataSource: StateStats;

  columnNames: string[] = ['id', 'city', 'population'];

  constructor() { }

  ngOnInit(): void {
  }

}
