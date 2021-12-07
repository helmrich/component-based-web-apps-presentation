import styled from 'styled-components';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
};

// =========== BASICS - BASIC STYLING =========== //

const Button = styled.button`
  background-color: dodgerblue;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;

  &:hover {
    filter: brightness(0.9);
  }
`;

// =========== BASICS - INTERPOLATION & PROPS =========== //

// const Button = styled.button<ButtonProps>`
//   background-color: ${({ variant = 'primary' }) =>
//     variant === 'secondary' ? 'seagreen' : 'dodgerblue'};
//   color: white;
//   padding: 0.5rem 1rem;
//   border-radius: 8px;

//   &:hover {
//     filter: brightness(0.9);
//   }
// `;

// =========== BASICS - ATTRIBUTES =========== //

// const Button = styled.button.attrs<ButtonProps>((props) => ({
//   onClick: () => {
//     console.log('test');
//   },
//   variant: props.variant || 'primary',
// }))<ButtonProps>`
//   background-color: ${({ variant }) =>
//     variant === 'secondary' ? 'seagreen' : 'dodgerblue'};
//   color: white;
//   padding: 0.5rem 1rem;
//   border-radius: 8px;

//   &:hover {
//     filter: brightness(0.9);
//   }
// `;

// =========== BASICS - THEMING =========== //

// const Button = styled.button<ButtonProps>`
//   background-color: ${({ theme, variant }) =>
//     variant === 'secondary' ? theme.colors.secondary : theme.colors.primary};
//   color: ${({ theme, variant }) =>
//     variant === 'secondary'
//       ? theme.colors.onSecondary
//       : theme.colors.onPrimary};
//   padding: 0.5rem 1rem;
//   border-radius: 8px;

//   &:hover {
//     filter: brightness(0.9);
//   }
// `;

// =========== //

export default Button;
