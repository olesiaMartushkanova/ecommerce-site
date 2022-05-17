import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

const Template: ComponentStory<typeof Button> = () => (
  <Button label='Shop now' />
);

export const Default = Template.bind({});
Default.args = {};

export default {
  title: 'Primitives/Button',
  component: Button,
} as ComponentMeta<typeof Button>;
