import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { fetchVenues } from 'api/venues';
import theme from 'style/theme';
import App from './components/App';

class AppContainer extends Component {
  state = {
    isGeoLocationLoading: false,
    isLoadingVenues: false,
    currentGeoLocation: null,
  };

  componentDidMount() {
    this.fetchVenues();
  }

  getGeoLocation = async () => {
    if (this.state.isGeoLocationLoading) {
      return;
    }

    this.setState({ isGeoLocationLoading: true });

    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        currentGeoLocation: position.coords,
        isGeoLocationLoading: false,
      });

      this.searchNearby();
    });
  };

  searchNearby = async () => {
    const { currentGeoLocation } = this.state;
    if (currentGeoLocation) {
      console.log('searching near', currentGeoLocation);
    }
  };

  searchNear = async query => {
    this.setState({ isLoadingVenues: true });
    const result = await fetchVenues({ near: query });
    console.log('found x near', result);
  };

  fetchVenues = async () => {
    const result = await fetchVenues({ near: 'Amsterdam ' });
    console.log('venues', result);
  };

  render() {
    const {
      isGeoLocationLoading,
      currentGeoLocation,
      isLoadingVenues,
    } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <App
          isGeoLocationLoading={isGeoLocationLoading}
          getGeoLocation={this.getGeoLocation}
          searchNear={this.searchNear}
        />
      </ThemeProvider>
    );
  }
}

export default AppContainer;
