import React, { Component } from 'react';
import { bool, func } from 'prop-types';
import { NormalCard } from 'style/Cards';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import UseLocationButton from './UseLocationButton';

const Wrapper = styled.div`
  position: absolute;
  z-index: 10;
  min-width: 350px;
  left: ${prop('theme.spacing.2')};
  top: ${prop('theme.spacing.2')};
`;

const SearchContainerForm = styled.form`
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

class SearchForm extends Component {
  static propTypes = {
    getGeoLocation: func.isRequired,
    isGeoLocationLoading: bool.isRequired,
    searchNear: func.isRequired,
  };

  state = {
    search: '',
  };

  onSearchChange = e => {
    this.setState({
      search: e.target.value,
    });
  };

  submitForm = e => {
    e.preventDefault();

    this.props.searchNear(this.state.search);
  };

  render() {
    const { search } = this.state;
    const { getGeoLocation } = this.props;

    return (
      <Wrapper>
        <NormalCard>
          <SearchContainerForm onSubmit={this.submitForm}>
            <SearchInput
              placeholder="Find venues in..."
              onChange={this.onSearchChange}
              value={search}
            />
            <UseLocationButton onClick={getGeoLocation} />
          </SearchContainerForm>
        </NormalCard>
      </Wrapper>
    );
  }
}

export default SearchForm;
