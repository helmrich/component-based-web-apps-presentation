import styled from 'styled-components';
import Button from './Button';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  ${Button} {
    // ...
  }
`;

export default Container;
