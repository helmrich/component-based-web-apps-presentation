import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from './Button';

// In den default export-Metadaten konfiguriert man, wie
// Storybook die Stories auflistet und stellt Informationen
// bereit, die von Addons genutzt werden können
const meta: Meta = {
  title: 'Controls/Button',
  component: Button,
};

export default meta;

/**
 * Ohne args
 * */
// export const Primary = () => (
//   <Button text="Click Me!" variant="primary" size="medium" />
// );

/**
 * Mit args
 * */

// Mit diesem Template legt man fest, wie die args gerendert
// werden sollen
const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Click Me!</Button>
);

// Mit den named exports in einer CSF-Datei legt
// man die Stories einer Komponente fest

// Template.bind({}) kopiert die Funktion => Weniger
// Code-Duplizierung
export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'medium',
};

// ...Primary.args destructured die args der Primary Story,
// danach überschreibt man nur die Argumente, die überschrieben
// werden sollen => Weniger Code-Duplizierung
export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  variant: 'secondary',
};
