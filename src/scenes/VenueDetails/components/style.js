import styled, { keyframes } from 'styled-components';
import { NormalCard } from 'style/Cards';
import { prop } from 'styled-tools';

const slideIn = keyframes`
from {
  transform: translateY(15px);
  opacity: 0;
}
to {
  transform: none;
  opacity: 1;
}
`;

export const Wrapper = NormalCard.extend`
  min-width: 380px;
  min-height: 350px;
  box-shadow: ${prop('theme.shadows.1')};
  animation: ${slideIn} 0.15s ease-out forwards;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div``;

export const Title = styled.h1`
  font-weight: 600;
`;
