import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { fetchVenues } from 'api/venues';
import theme from 'style/theme';
import App from './components/App';

class AppContainer extends Component {
  componentDidMount() {
    this.fetchVenues();
  }

  fetchVenues = async () => {
    const result = await fetchVenues({ near: 'Amsterdam ' });
    console.log('venues', result);
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
  }
}

export default AppContainer;
