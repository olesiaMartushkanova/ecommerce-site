import { ComponentStory, ComponentMeta } from '@storybook/react';
import List, { ListItemType } from './List';

const TEST_ITEMS: ListItemType[] = [
  { id: 'suitcases', title: 'Suitcases' },
  { id: 'bags', title: 'Bags' },
  { id: 'accessories', title: 'Accessories' },
];

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  listItems: TEST_ITEMS,
};

export default {
  title: 'Primitives/List',
  component: List,
} as ComponentMeta<typeof List>;
