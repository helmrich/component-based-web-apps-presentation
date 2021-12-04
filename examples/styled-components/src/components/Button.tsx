import styled, { css } from 'styled-components';
import Container from './Container';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
};

// const Button = styled.button`
//   background-color: dodgerblue;
//   color: white;
//   padding: 0.5rem 1rem;
//   border-radius: 8px;

//   &:hover {
//     filter: brightness(0.9);
//   }
// `;

// const Button = styled.button<ButtonProps>`
//   background-color: ${({ variant = 'primary' }) =>
//     variant === 'primary' ? 'dodgerblue' : 'seagreen'};
//   color: white;
//   padding: 0.5rem 1rem;
//   border-radius: 8px;

//   &:hover {
//     filter: brightness(0.9);
//   }
// `;

// const Button = styled.button.attrs<ButtonProps>((props) => ({
//   onClick: () => {
//     console.log('test');
//   },
//   variant: props.variant || 'primary',
// }))<ButtonProps>`
//   background-color: ${({ variant }) =>
//     variant === 'primary' ? 'dodgerblue' : 'seagreen'};
//   color: white;
//   padding: 0.5rem 1rem;
//   border-radius: 8px;

//   &:hover {
//     filter: brightness(0.9);
//   }
// `;

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

export const ExtendedButton = styled(Button)`
  background-color: seagreen;
`;

export default Button;
