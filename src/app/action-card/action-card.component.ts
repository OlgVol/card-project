import { Component, Input } from '@angular/core';
import { IFeature } from '../module/feature';

@Component({
  selector: 'app-action-card',
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.scss'],
})
export class ActionCardComponent {
  @Input() cardTitle!: string;
  @Input() features: IFeature[] = [];
  @Input() titleColor!: string;
}

