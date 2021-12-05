import styled from 'styled-components';

export type ButtonProps = {
  variant?: 'primary' | 'secondary';
};

const Button = styled.button<ButtonProps>`
  background-color: ${({ theme, variant }) =>
    variant === 'secondary' ? theme.colors.secondary : theme.colors.primary};
  color: ${({ theme, variant }) =>
    variant === 'secondary' ? theme.colors.secondary : theme.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: 8px;

  &:hover {
    filter: brightness(0.9);
  }
`;

export default Button;
