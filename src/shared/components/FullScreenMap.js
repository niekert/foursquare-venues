import React from 'react';
import styled from 'styled-components';
import GoogleMap from './GoogleMap';

const ContainerElement = styled.div`
  width: 100vw;
  height: 100vh;
`;

// eslint-disable-next-line react/prefer-stateless-function
class FullScreenMap extends React.Component {
  render() {
    return (
      <GoogleMap
        containerElement={<ContainerElement />}
        mapElement={<div style={{ height: '100%' }} />}
        {...this.props}
      />
    );
  }
}

export default FullScreenMap;
