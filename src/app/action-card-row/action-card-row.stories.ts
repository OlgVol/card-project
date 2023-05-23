import { moduleMetadata, Story } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ActionCardRowComponent } from './action-card-row.component';

export default {
  title: 'Components/ActionCardRow',
  component: ActionCardRowComponent,
  decorators: [
    moduleMetadata({
      declarations: [ActionCardRowComponent],
    }),
  ],
};

export const actionsData = {
  deleteRow: action('Delete Row'),
  editRow: action('Edit Row'),
};
