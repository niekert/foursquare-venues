import { shape, string, number } from 'prop-types';

export const latLong = shape({
  lat: number.isRequired,
  lng: number.isRequired,
});

export const venue = shape({
  referralId: string.isRequired,
  venue: shape({
    name: string.isRequired,
    rating: number,
    ratingBackground: string,
  }).isRequired,
});
