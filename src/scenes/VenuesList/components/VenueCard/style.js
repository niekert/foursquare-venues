import styled from 'styled-components';
import { alpha, darken } from 'shared/util/colors';
import { prop } from 'styled-tools';

export const Wrapper = styled.button`
  padding: ${prop('theme.spacing.1')} 0;
  font-size: 14px;
  text-align: left;
  outline: none;
  width: 100%;
  background: none;
  cursor: pointer;
  border: none;
  max-width: 350px;
  border-bottom: 1px solid ${props => alpha(props.theme.color.main, 0.1)};
  transition: background 0.075s ease-out;
  display: flex;

  &:hover {
    background: ${props => darken(props.theme.bg.card, 0.05)};
  }
`;

export const Details = styled.div`
  flex: 1;
  margin-left: ${prop('theme.spacing.0')};
`;

export const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 2px;
  flex-shrink: 0;
`;

export const Title = styled.span`
  font-weight: 600;
  display: block;
  font-size: 14px;
`;

export const Subtitle = styled.span`
  font-size: 12px;
  display: block;
  font-weight: 300;
  color: ${prop('theme.color.sub')};
`;

export const Rating = styled.span`
  align-self: center;
  border-radius: 3px;
  color: #fff;
  font-weight: 300;
  width: 50px;
  text-align: center;
  background-color: #${prop('background')};
  flex-shrink: 0;
`;
