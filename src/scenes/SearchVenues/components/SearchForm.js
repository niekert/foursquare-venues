import React, { Component } from 'react';
import { func, oneOf } from 'prop-types';
import { NormalCard } from 'style/Cards';
import { smallUp } from 'style/breakpoints';
import VenuesList from 'scenes/VenuesList';
import styled from 'styled-components';
import { SEARCH_TYPE_QUERY, SEARCH_TYPE_CURRENT_GEO } from 'app-constants';
import { prop } from 'styled-tools';
import UseLocationButton from './UseLocationButton';

const Wrapper = styled.div`
  position: absolute;
  z-index: 10;
  min-width: 350px;
  padding: 0 ${prop('theme.spacing.1')};
  left: 0;
  right: 0;
  top: ${prop('theme.spacing.2')};

  ${smallUp`
    left: ${prop('theme.spacing.2')};
    right: initial;
    padding: 0;
  `};
`;

const SearchContainerWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const StyledForm = styled.form`
  flex: 1;
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
    fetchVenuesBySearch: func.isRequired,
    fetchVenuesByGeoLocation: func.isRequired,
    activeSearchType: oneOf([SEARCH_TYPE_QUERY, SEARCH_TYPE_CURRENT_GEO]),
  };

  static defaultProps = {
    activeSearchType: null,
  };

  state = {
    isGeoLocationLoading: false,
    search: '',
  };

  onSearchChange = e => {
    this.setState({
      search: e.target.value,
    });
  };

  getGeoLocation = e => {
    e.stopPropagation();
    e.preventDefault();

    this.setState({ isGeoLocationLoading: true });

    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        isGeoLocationLoading: false,
      });

      this.props.fetchVenuesByGeoLocation(position);
    });
  };

  submitForm = e => {
    e.preventDefault();

    this.props.fetchVenuesBySearch(this.state.search);
  };

  render() {
    const { activeSearchType } = this.props;
    const { search, isGeoLocationLoading } = this.state;

    return (
      <Wrapper>
        <NormalCard>
          <SearchContainerWrapper>
            <StyledForm onSubmit={this.submitForm}>
              <SearchInput
                placeholder="Find venues near..."
                onChange={this.onSearchChange}
                value={search}
              />
            </StyledForm>
            <UseLocationButton
              isLoading={isGeoLocationLoading}
              isActive={activeSearchType === SEARCH_TYPE_CURRENT_GEO}
              onClick={this.getGeoLocation}
            />
          </SearchContainerWrapper>
          <VenuesList />
        </NormalCard>
      </Wrapper>
    );
  }
}

export default SearchForm;
