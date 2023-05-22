import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { HomePageComponent } from './home-page.component';
import { ActionCardComponent } from '../action-card/action-card.component';
import { ActionCardRowComponent } from '../action-card-row/action-card-row.component';
import { IFeature } from '../module/feature';

export default {
  title: 'Pages/Home',
  component: HomePageComponent,
  decorators: [
    moduleMetadata({
      declarations: [ActionCardComponent, ActionCardRowComponent],
    }),
  ],
} as Meta;

const Template: Story<HomePageComponent> = (args) => ({
  props: args,
  template: `
    <div>
    <link
    rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
   >
      <app-home-page></app-home-page>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  pageTitle: 'Home Page',
  features: [
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
      featureName: 'Achieve Great Results',
      canDelete: true,
    },
    {
      featureName: 'Better Workflow',
      canDelete: true,
    },
  ] as IFeature[],
  popoverTitle:
    'Do you want to delete this feature? First create another "must-have tool".',
  popoverContent:
    'There must be at least one "Must-have tool" in your list. If you wish to delete this feature, you first need to create another feature with the same badge.',
  onDelete: () => {
    console.log('Row deleted');
  },
  onEdit: () => {
    console.log('Row edited');
  },
};
