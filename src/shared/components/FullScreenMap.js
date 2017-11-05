import React from 'react';
import styled from 'styled-components';
import GoogleMap from './GoogleMap';

const ContainerElement = styled.div`
  width: 100vw;
  height: 100vh;
`;

function FullScreenMap(props) {
  return (
    <GoogleMap
      containerElement={<ContainerElement />}
      mapElement={<div style={{ height: '100%' }} />}
      {...props}
    />
  );
}

export default FullScreenMap;
