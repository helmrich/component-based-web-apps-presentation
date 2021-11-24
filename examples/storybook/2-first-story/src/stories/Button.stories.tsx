import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from '../components/Button/Button';

// In den default export-Metadaten konfiguriert man, wie
// Storybook die Stories auflistet und stellt Informationen
// bereit, die von Addons genutzt werden können
const meta: Meta = {
  title: 'Button',
  component: Button,
};

export default meta;

/**
 * Ohne args
 * */
// export const Primary = () => (
//   <Button
//     text="Click Me!"
//     fontSize={16}
//     backgroundColor="#96c7c1"
//     color="white"
//     borderRadius={4}
//     paddingHorizontal={24}
//     paddingVertical={12}
//   />
// );

/**
 * Mit args
 * */

// Mit diesem Template legt man fest, wie die args gerendert
// werden sollen
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Mit den named exports in einer CSF-Datei legt
// man die Stories einer Komponente fest

// Template.bind({}) kopiert die Funktion => Weniger
// Code-Duplizierung
export const Primary = Template.bind({});
Primary.args = {
  text: 'Click Me!',
  fontSize: 16,
  backgroundColor: '#96c7c1',
  color: 'white',
  borderRadius: 4,
  paddingHorizontal: 24,
  paddingVertical: 12,
};

// ...Primary.args destructured die args der Primary Story,
// danach überschreibt man nur die Argumente, die überschrieben
// werden sollen => Weniger Code-Duplizierung
export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  backgroundColor: '#b91646',
};
