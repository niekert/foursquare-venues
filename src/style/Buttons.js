import styled from 'styled-components';
import { prop } from 'styled-tools';

export const IconButton = styled.button`
  padding: 0 ${prop('theme.spacing.0')};
  background: none;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;

  svg {
    width: 24px;
    height: 24px;
  }
`;
