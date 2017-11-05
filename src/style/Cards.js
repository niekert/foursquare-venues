import styled from 'styled-components';
import { prop } from 'styled-tools';

export const NormalCard = styled.div`
  margin-bottom: 15px;
  box-shadow: ${prop('theme.shadows.1')};
  background: ${prop('theme.bg.card')};
  padding: ${prop('theme.spacing.1')};
`;
