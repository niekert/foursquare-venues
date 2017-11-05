import React from 'react';
import { ContentWrapper } from 'style/Layout';
import SearchVenues from 'scenes/SearchVenues';
import Map from 'scenes/Map';

const App = () => (
  <ContentWrapper>
    <SearchVenues />
    <Map />
  </ContentWrapper>
);

export default App;
