import styled from 'styled-components';

export type ButtonProps = {
  variant?: 'primary' | 'secondary';
};

const Button = styled.button<ButtonProps>`
  background-color: ${({ theme, variant = 'primary' }) =>
    variant === 'primary' ? theme.colors.primary : theme.colors.secondary};
  color: ${({ theme, variant = 'primary' }) =>
    variant === 'primary' ? theme.colors.onPrimary : theme.colors.onSecondary};
  padding: 0.5rem 1rem;
  border-radius: 8px;

  &:hover {
    filter: brightness(0.9);
  }
`;

export default Button;
