import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { ActionCardComponent } from './action-card.component';
import { IFeature } from '../module/feature';
import { ActionCardRowComponent } from '../action-card-row/action-card-row.component';

export default {
  title: 'Components/ActionCard',
  component: ActionCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [ActionCardRowComponent],
    }),
  ],
} as Meta;

const Template: Story<ActionCardComponent> = (args) => ({
  props: args,
  template: `
    <div>
    <link
    rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
   >
      <app-action-card
        [cardTitle]="cardTitle"
        [features]="features"
        [titleColor]="titleColor"
      >
        <ng-container *ngFor="let feature of features">
          <app-action-card-row
            [row]="feature"
            [popoverTitle]="'Popover Title'"
            [popoverContent]="'Popover Content'"
            (deleteRow)="onDeleteRow(feature)"
            (editRow)="onEditRow(feature)"
          ></app-action-card-row>
        </ng-container>
      </app-action-card>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  cardTitle: 'Action Card Title',
  features: [
    {
      featureName: 'Feature 1',
      canDelete: true,
      toDoList: ['Task 1', 'Task 2'],
    },
    {
      featureName: 'Feature 2',
      canDelete: false,
      toDoList: ['Task 3', 'Task 4'],
    },
    {
      featureName: 'Feature 3',
      canDelete: true,
      toDoList: ['Task 5', 'Task 6'],
    },
  ] as IFeature[],
  titleColor: 'red',
};

