import { ReactNode } from 'react';
import styled from 'styled-components';

export type ButtonProps = {
  children: ReactNode;
  variant: 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large';
};

const StyledButton = styled.button<ButtonProps>`
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  background-color: ${({ variant }) =>
    variant === 'primary' ? '#6a7efc' : '#ffffff'};
  color: ${({ variant }) => (variant === 'primary' ? '#ffffff' : '#494953')};
  font-size: ${({ size }) =>
    size === 'small' ? '0.75rem' : size === 'medium' ? '1rem' : '1.25rem'};
  border: ${({ variant }) =>
    variant === 'secondary' ? '1px solid #494953' : 0};
`;

const Button = ({ children, variant, size }: ButtonProps) => {
  return (
    <StyledButton variant={variant} size={size}>
      {children}
    </StyledButton>
  );
};

// const Button = ({ variant = 'primary', size = 'medium' }: ButtonProps) => {
//   return (
//     <button
//       style={{
//         backgroundColor: variant === 'primary' ? '#6a7efc' : '#ffffff',
//         color: variant === 'primary' ? '#ffffff' : '#494953',
//         borderRadius: '4px',
//         fontSize:
//           size === 'small' ? '0.75rem' : size === 'medium' ? '1rem' : '1.25rem',
//         padding: '8px 12px',
//         border: variant === 'secondary' ? '1px solid #494953' : 0,
//         cursor: 'pointer',
//       }}
//     ></button>
//   );
// };

export default Button;
