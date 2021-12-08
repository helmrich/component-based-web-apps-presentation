import styled from 'styled-components';
import Theme from '../../theme/Theme';

export type CardProps = {
  media: { title: string; imageUrl: string };
  elevation?: keyof Theme['shadows'];
};

const Card = styled.article<CardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  border-radius: 8px;
  box-shadow: ${({ elevation = 'medium', theme }) => theme.shadows[elevation]};
  padding: 16px;
`;

export default Card;
