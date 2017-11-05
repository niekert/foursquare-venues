import React from 'react';
import { ContentWrapper } from 'style/Layout';
import SearchVenues from 'scenes/SearchVenues';
import Map from './Map';

// FIXME: I have to document the propTypes properly here
const App = props => (
  <ContentWrapper>
    <SearchVenues {...props} />
    <Map />
  </ContentWrapper>
);

export default App;
