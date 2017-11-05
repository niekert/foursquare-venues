import React from 'react';
import { arrayOf, string, number, bool, func } from 'prop-types';
import { CloseIcon } from 'shared/components/icons';
import { Loading } from 'shared/components';
import { IconButton } from 'style/Buttons';
import { Rating } from 'style/Venue';
import VenuePhotos from './VenuePhotos';
import { Wrapper, Content, Title, TitleWrapper } from './style';

function VenueDetails({
  isLoading,
  photoUrls,
  rating,
  ratingColor,
  closeSelectedVenue,
  name,
}) {
  return (
    <Wrapper>
      {isLoading && <Loading />}
      {!isLoading && (
        <Content>
          <IconButton onClick={closeSelectedVenue}>
            <CloseIcon />
          </IconButton>
          <TitleWrapper>
            <Title>{name}</Title>
            {!!rating && <Rating background={ratingColor}>{rating}</Rating>}
          </TitleWrapper>
          {photoUrls.length > 0 && <VenuePhotos photoUrls={photoUrls} />}
        </Content>
      )}
    </Wrapper>
  );
}

VenueDetails.propTypes = {
  isLoading: bool,
  closeSelectedVenue: func.isRequired,
  photoUrls: arrayOf(string),
  rating: number,
  ratingColor: string,
  name: string,
};

VenueDetails.defaultProps = {
  isLoading: false,
  photoUrls: [],
  rating: null,
  name: '',
  ratingColor: null,
};

export default VenueDetails;
