import { Component, Input } from '@angular/core';
import { IFeature } from '../module/feature';

@Component({
  selector: 'app-action-card-row',
  templateUrl: './action-card-row.component.html',
  styleUrls: ['./action-card-row.component.scss']
})
export class ActionCardRowComponent {
  @Input() row!: IFeature;
  showToDoList = false;
  showFeature = false;

  toggleMenu() {
    this.showToDoList = !this.showToDoList;
  }
}
