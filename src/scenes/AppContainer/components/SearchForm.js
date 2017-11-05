import React from 'react';
import { NormalCard } from 'style/Cards';
import { IconButton } from 'style/Buttons';
import { MyLocationIcon } from 'shared/components/icons';
import styled from 'styled-components';
import { prop } from 'styled-tools';

const Wrapper = styled.div`
  position: absolute;
  z-index: 10;
  min-width: 350px;
  left: ${prop('theme.spacing.2')};
  top: ${prop('theme.spacing.2')};
`;

const UseLocationButton = IconButton.extend`
  color: '#333';
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
`;

const SearchInput = styled.input.attrs({
  type: 'text',
})`
  height: 32px;
  width: 100%;
  border: none;
  font-size: 16px;
  border: none;
  outline: none;
`;

function SearchForm() {
  return (
    <Wrapper>
      <NormalCard>
        <SearchContainer>
          <SearchInput placeholder="Find venues in..." />
          <UseLocationButton>
            <MyLocationIcon />
          </UseLocationButton>
        </SearchContainer>
      </NormalCard>
    </Wrapper>
  );
}

export default SearchForm;
