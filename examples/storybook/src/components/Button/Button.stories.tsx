import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from './Button';

// =========== STORIES - BUTTON STORY =========== //

export default {
  title: 'Controls/Button',
  component: Button,
} as Meta<ButtonProps>;

export const Primary: Story<ButtonProps> = (args) => (
  <Button {...args}>Button</Button>
);

// =========== STORIES - TEMPLATE & ARGS =========== //

// export default {
//   title: 'Button',
//   component: Button,
//   args: {
//     size: 'medium',
//   },
// } as Meta<ButtonProps>;

// const Template: Story<ButtonProps> = (args) => (
//   <Button {...args}>Button</Button>
// );

// export const Primary = Template.bind({});
// Primary.args = {
//   variant: 'primary',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   variant: 'secondary',
// };

// =========== STORIES - ARGTYPES =========== //

// export default {
//   title: 'Button',
//   component: Button,
//   argTypes: {
//     children: {
//       name: 'label',
//       control: {
//         type: 'text',
//       },
//     },
//   },
//   args: {
//     children: 'Button',
//     size: 'medium',
//   },
// } as Meta<ButtonProps>;

// const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   variant: 'primary',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   variant: 'secondary',
// };

// =========== STORIES - ACTIONS =========== //

// export default {
//   title: 'Button',
//   component: Button,
//   argTypes: {
//     children: {
//       name: 'label',
//       table: {
//         type: { summary: 'string' },
//         defaultValue: { summary: '"Button"' },
//       },
//       control: {
//         type: 'text',
//       },
//     },
//   },
//   args: {
//     children: 'Button',
//     size: 'medium',
//   },
//   parameters: {
//     actions: {
//       handles: ['click'],
//     },
//   },
// } as Meta<ButtonProps>;

// const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   variant: 'primary',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   variant: 'secondary',
// };
