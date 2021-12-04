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

// Mit den named exports in einer CSF-Datei legt
// man die Stories einer Komponente fest
// export const Primary = () => <Button variant="primary">Click Me!</Button>;
// export const Secondary = () => <Button variant="secondary">Click Me!</Button>;

/**
 * Mit args
 * */

// Mit diesem Template legt man fest, wie die args gerendert
// werden sollen
type StoryProps = {
  text: string;
} & ButtonProps;

const Template: Story<StoryProps> = (args) => (
  <Button {...args}>{args.text}</Button>
);

// Template.bind({}) kopiert die Funktion => Weniger
// Code-Duplizierung
export const Primary = Template.bind({});
Primary.args = {
  text: 'Click Me!',
  variant: 'primary',
};

// ...Primary.args destructured die args der Primary Story,
// danach überschreibt man nur die Argumente, die überschrieben
// werden sollen => Weniger Code-Duplizierung
export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  variant: 'secondary',
};
