import { Component, Input } from '@angular/core';
import { IFeature } from '../module/feature';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  pageTitle = 'Home Page';
  @Input() features: IFeature[] = [
    {
      featureName: 'Discover New Features',
      canDelete: false,
      toDoList: [
        'Interactive Dashboard',
        'Smart Reminders',
        'Data-driven Decision Making',
      ],
    },
    {
      featureName: 'Achieve Greate Result',
      canDelete: true,
    },
    {
      featureName: 'Better Workflow',
      canDelete: true,
    },
  ];

  onDelete() {
    console.log('row deleted');
  }

  onEdit() {
    console.log('row edited');
  }
}
