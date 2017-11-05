import styled from 'styled-components';
import { prop } from 'styled-tools';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
`;

export const Input = styled.input`
  height: 32px;
  font-size: 14px;
  border-radius: 3px;
  color: ${prop('theme.color.primary')};
  padding: ${prop('theme.spacing.0')};
  margin-bottom: ${prop('theme.spacing.1')};
  webkit-style: none;
  border: 1px solid ${prop('theme.color.outline')};
`;

export const Label = styled.label`
  margin-bottom: ${prop('theme.spacing.0')};
  display: block;
  font-size: 20px;
`;

export const ErrorLabel = Label.withComponent('span').extend`
  color: ${prop('theme.color.error')};
`;
