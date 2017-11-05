import React from 'react';
import { arrayOf, func } from 'prop-types';
import { venue as venuesPropType } from 'customPropTypes';
import { getVenueId } from 'data/venues/selectors';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import VenueCard from './VenueCard';

const Wrapper = styled.div`
  margin-top: ${prop('theme.spacing.1')};
  overflow: auto;
  max-height: 80vh;
`;

function VenuesList({ venues, selectVenue }) {
  return (
    <Wrapper>
      {venues.map(venue => (
        <VenueCard
          key={getVenueId(venue)}
          venue={venue}
          selectVenue={selectVenue}
        />
      ))}
    </Wrapper>
  );
}

VenuesList.propTypes = {
  venues: arrayOf(venuesPropType).isRequired,
  selectVenue: func.isRequired,
};

export default VenuesList;
