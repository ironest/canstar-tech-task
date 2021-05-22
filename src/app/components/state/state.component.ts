import { Component, Input } from '@angular/core';
import { StateStats } from 'src/app/shared/population.model';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent {

  @Input() dataSource: StateStats;
  columnNames: string[] = ['id', 'city', 'population'];

}
