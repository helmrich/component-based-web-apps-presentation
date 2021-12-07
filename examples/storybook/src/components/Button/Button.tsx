import styled from 'styled-components';
import Theme from '../../theme/Theme';

export type ButtonProps = {
  variant?: 'primary' | 'secondary';
  size?: keyof Theme['fontSizes'];
};

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

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
};

export default Button;
