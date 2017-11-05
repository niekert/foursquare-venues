import React from 'react';
import styled from 'styled-components';
import { FullScreenMap, Loading } from 'shared/components';

function Map() {
  return (
    <FullScreenMap
      loadingElement={<div />}
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    />
  );
}

export default Map;
