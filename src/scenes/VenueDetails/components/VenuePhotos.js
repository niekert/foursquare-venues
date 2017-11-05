import React from 'react';
import { arrayOf, string } from 'prop-types';
import { prop } from 'styled-tools';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Photo = styled.img`
  margin: ${prop('theme.spacing.0')};
`;

function VenuePhotos({ photoUrls }) {
  return (
    <Wrapper>{photoUrls.map(url => <Photo key={url} src={url} />)}</Wrapper>
  );
}

VenuePhotos.propTypes = {
  photoUrls: arrayOf(string).isRequired,
};

export default VenuePhotos;
