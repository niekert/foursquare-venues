import styled from 'styled-components';
import { prop } from 'styled-tools';

export const Rating = styled.span`
  align-self: center;
  border-radius: 3px;
  color: #fff;
  font-weight: 300;
  width: 50px;
  text-align: center;
  display: block;
  font-size: 14px;
  background-color: #${prop('background')};
  flex-shrink: 0;
`;
