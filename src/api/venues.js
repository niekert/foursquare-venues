import { apiRequest } from './request';

export const fetchVenues = async ({
  latLong,
  near,
  radius = 250,
  venuePhotos = 1,
}) =>
  apiRequest('/venues/explore', {
    ll: latLong,
    near,
    venuePhotos,
    radius,
  }).then(data => data.response);
