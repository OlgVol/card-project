import { Component } from '@angular/core';

@Component({
  selector: 'app-action-card',
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.scss']
})
export class ActionCardComponent {
showFeature = false
sign = 'up'
cardTitle = 'Card for Organizing Activities';

toggleMenu() {
  if(this.sign == 'up') {
    this.sign = 'down'
  } else {
    this.sign = 'up'
  }
  }
}

