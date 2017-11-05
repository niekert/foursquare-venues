import React from 'react';
import { ContentWrapper } from 'style/Layout';
import SearchForm from './SearchForm';
import Map from './Map';

const App = () => (
  <ContentWrapper>
    <SearchForm />
    <Map />
  </ContentWrapper>
);

export default App;
