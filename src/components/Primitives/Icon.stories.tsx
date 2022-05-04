import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from './Icon';

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: '/images/cart.svg',
};

export default {
  title: 'Primitives/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;
