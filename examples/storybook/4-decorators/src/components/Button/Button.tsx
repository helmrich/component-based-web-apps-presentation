import styled from 'styled-components';

export type ButtonProps = {
  variant?: 'primary' | 'secondary';
};

const Button = styled.button<ButtonProps>`
  background-color: ${({ variant = 'primary' }) =>
    variant === 'primary' ? 'dodgerblue' : 'seagreen'};
  color: white;
  padding: 0.5rem 1rem;
  border: 0;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;

export default Button;
