import React from 'react';
import { func } from 'prop-types';
import { venue as venueProptype } from 'customPropTypes';
import { Wrapper, Thumbnail, Details, Title, Subtitle, Rating } from './style';
import { getThumbnailUrl, getCategory } from '../../selectors';

function VenueCard({ venue: venueDetails, onClick }) {
  const { venue } = venueDetails;
  const thumbnailUrl = getThumbnailUrl(venue);
  const category = getCategory(venue);

  return (
    <Wrapper onClick={onClick}>
      <Thumbnail src={thumbnailUrl} />
      <Details>
        <Title>{venue.name}</Title>
        {!!category && <Subtitle>{category.name}</Subtitle>}
      </Details>
      <Rating background={venue.ratingColor}>{venue.rating}</Rating>
    </Wrapper>
  );
}

VenueCard.propTypes = {
  venue: venueProptype.isRequired,
  onClick: func.isRequired,
};

export default VenueCard;
