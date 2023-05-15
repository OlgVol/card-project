import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  pageTitle = 'Home Page';

  Delete() {
    console.log('row deleted');
  }

  Edit() {
    console.log('row edited');
  }
}
