import React from 'react';
import { arrayOf } from 'prop-types';
import { venue as venuesPropType } from 'customPropTypes';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import VenueCard from './VenueCard';

const Wrapper = styled.div`
  max-height: 80vh;
  margin-top: ${prop('theme.spacing.1')};
  overflow: auto;
`;

function VenuesList({ venues }) {
  return (
    <Wrapper>
      {venues.map(venue => <VenueCard key={venue.referralId} venue={venue} />)}
    </Wrapper>
  );
}

VenuesList.propTypes = {
  venues: arrayOf(venuesPropType).isRequired,
};

export default VenuesList;
