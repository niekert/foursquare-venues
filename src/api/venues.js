import { apiRequest } from './request';

export const fetchVenues = async ({ latLong, near, radius = 250 }) =>
  apiRequest('/venues/explore', {
    ll: latLong,
    near,
    radius,
  });
