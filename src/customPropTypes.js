import { shape, string, number, any } from 'prop-types';

export const latLong = shape({
  lat: string.isRequired,
  lng: string.isRequired,
});

export const venue = any;
