import { Meta, Story } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { IFeature } from '../module/feature';
import { ActionCardRowComponent } from './action-card-row.component';

const feature: IFeature = {
  featureName: 'Awesome Feature',
  canDelete: true,
  toDoList: ['Task 1', 'Task 2', 'Task 3'],
};
export default {
  title: 'Components/Action Card Row',
  component: ActionCardRowComponent,
} as Meta;

const Template: Story<ActionCardRowComponent> = (args) => ({
  props: args,
  template: `
    <div>
      <link
       rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
      >
      <div class="container mt-5">
        <app-action-card-row
        [row]="row"
        [popoverTitle]="popoverTitle"
        [popoverContent]="popoverContent"
        (deleteRow)="onDelete()"
        (editRow)="onEdit()"
        ></app-action-card-row>
      </div>
    </div>
  `,
  styles: [
    `
    .custom-popover {
      max-width: 200px;
    }
    `,
  ],
  methods: {
    onDelete: action('Delete Row'),
    onEdit: action('Edit Row'),
  },
});

export const Default = Template.bind({});
Default.args = {
  row: feature,
  popoverTitle: 'Popover Title',
  popoverContent: 'Popover Content',
};
