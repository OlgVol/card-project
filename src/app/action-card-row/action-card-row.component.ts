import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFeature } from '../module/feature';

@Component({
  selector: 'app-action-card-row',
  templateUrl: './action-card-row.component.html',
  styleUrls: ['./action-card-row.component.scss'],
})
export class ActionCardRowComponent {
  @Input() row!: IFeature;
  @Input() popoverTitle!: string;
  @Input() popoverContent!: string;
  @Output() deleteRow = new EventEmitter();
  @Output() editRow = new EventEmitter();
  showToDoList = false;
  showFeature = false;

  toggleMenu() {
    this.showToDoList = !this.showToDoList;
  }

  onDelete() {
    this.deleteRow.emit();
  }

  onEdit() {
    this.editRow.emit();
  }
}
