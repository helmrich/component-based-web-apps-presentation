import styled from 'styled-components';
import Theme from '../../theme/Theme';

export type ButtonProps = {
  // /**
  //  * The `variant` defines the importance of the button.
  //  * `primary` should be used for prominent buttons with
  //  * important functionality. `secondary` should be used for
  //  * buttons that live alongside primary buttons to provide
  //  * additional actions.
  //  */
  variant?: 'primary' | 'secondary';

  // /**
  //  * The `size` parameter can be set to adjust the size of the
  //  * button. This will increase the button's font size.
  //  */
  size?: keyof Theme['fontSizes'];
};

// /**
//  * This is the **button** for our web app. Its `size` and `variant`
//  * can be configured.
//  */
const Button = styled.button<ButtonProps>`
  background-color: ${({ theme, variant }) =>
    variant === 'secondary' ? theme.colors.secondary : theme.colors.primary};
  color: ${({ theme, variant }) =>
    variant === 'secondary'
      ? theme.colors.onSecondary
      : theme.colors.onPrimary};
  font-size: ${({ theme, size = 'medium' }) => theme.fontSizes[size]};
  padding: 0.5rem 1rem;
  border-radius: 8px;

  &:hover {
    filter: brightness(0.9);
  }
`;

// Button.defaultProps = {
//   variant: 'primary',
//   size: 'medium',
// };

export default Button;
