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
  popoverTitle =
    'Do you want to delete this feature? First create another “must have tool”.';
  popoverContent =
    'There must be at least one “Must have tool” in your list. If you wish to delete this feature, you first need to create another feature with the same badge.';

  onDelete() {
    console.log('row deleted');
  }

  onEdit() {
    console.log('row edited');
  }
}
