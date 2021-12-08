import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from './Button';

// =========== STORIES - STORIES =========== //

// export default {
//   title: 'Controls/Button',
//   component: Button,
// } as Meta<ButtonProps>;

// export const Primary: Story<ButtonProps> = (args) => (
//   <Button {...args}>Button</Button>
// );

// =========== STORIES - TEMPLATE & ARGS =========== //

// export default {
//   title: 'Controls/Button',
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
//   title: 'Controls/Button',
//   component: Button,
//   argTypes: {
//     children: {
//       name: 'label',
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

// =========== STORIES - CONTROLS =========== //

// export default {
//   title: 'Controls/Button',
//   component: Button,
//   argTypes: {
//     size: {
//       control: {
//         type: 'select',
//       },
//     },
//     children: {
//       name: 'label',
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

export default {
  title: 'Controls/Button',
  component: Button,
  argTypes: {
    children: {
      name: 'label',
    },
    onClick: {
      action: 'click',
    },
  },
  args: {
    children: 'Button',
    size: 'medium',
  },
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

// =========== STORIES - DOCS =========== //

// export default {
//   title: 'Controls/Button',
//   component: Button,
//   argTypes: {
//     children: {
//       name: 'label',
//       table: {
//         type: { summary: 'string' },
//         defaultValue: { summary: '"Button"' },
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
