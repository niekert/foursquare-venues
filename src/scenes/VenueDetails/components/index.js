import React from 'react';
import { arrayOf, string, number, bool } from 'prop-types';
import { Loading } from 'shared/components';
import { Rating } from 'style/Venue';
import VenuePhotos from './VenuePhotos';
import { Wrapper, Content, Title, TitleWrapper } from './style';

function VenueDetails({ isLoading, photoUrls, rating, ratingColor, name }) {
  return (
    <Wrapper>
      {isLoading && <Loading />}
      {!isLoading && (
        <Content>
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
