import { ComponentStory, ComponentMeta } from '@storybook/react';
import Menu, { IListItem } from './Menu';

const TEST_ITEMS: IListItem[] = [
  { id: 'suitcases', name: 'Suitcases' },
  { id: 'bags', name: 'Bags' },
  { id: 'accessories', name: 'Accessories' },
];

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Shop',
  listItems: TEST_ITEMS,
};

export default {
  title: 'Footer/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;
