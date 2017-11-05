import React from 'react';
import { arrayOf, func } from 'prop-types';
import { venue as venuesPropType } from 'customPropTypes';
import { smallUp } from 'style/breakpoints';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import VenueCard from './VenueCard';

const Wrapper = styled.div`
  margin-top: ${prop('theme.spacing.1')};
  overflow: auto;
  max-height: 40vh;

  ${smallUp`
    max-height: 80vh;
  `};
`;

function VenuesList({ venues, selectVenue }) {
  return (
    <Wrapper>
      {venues.map(venue => (
        <VenueCard
          key={venue.referralId}
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
