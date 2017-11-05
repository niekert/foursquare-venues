import { fetchVenues } from 'api/venues';
import 'babel-polyfill';

export const FETCH_VENUES_BY_GEO = 'FETCH_VENUES_BY_GEO';
export const SELECT_VENUE = 'SELECT_VENUE';
export const CLOSE_SELECTED_VENUE = 'CLOSE_SELECTED_VENUE';
export const FETCH_VENUES_BY_SEARCH = 'FETCH_VENUES_BY_SEARCH';
export const FETCH_VENUES_SUCCESS = 'FETCH_VENUES_SUCCESS';
export const FETCH_VENUES_ERROR = 'FETCH_VENUES_ERROR';

export function fetchVenuesByGeoLocation(position) {
  const { coords: { latitude, longitude } } = position;
  const latLng = {
    lat: latitude,
    lng: longitude,
  };
  return async dispatch => {
    dispatch({
      type: FETCH_VENUES_BY_GEO,
      payload: {
        latLng,
      },
    });

    const venues = await fetchVenues({
      latLong: [latitude, longitude].join(','),
    });

    dispatch({
      type: FETCH_VENUES_SUCCESS,
      payload: {
        venues,
      },
    });
  };
}

export function fetchVenuesBySearch(searchQuery) {
  return async dispatch => {
    dispatch({
      type: FETCH_VENUES_BY_SEARCH,
      payload: {
        query: searchQuery,
      },
    });

    const venues = await fetchVenues({
      near: searchQuery,
    });

    dispatch({
      type: FETCH_VENUES_SUCCESS,
      payload: {
        venues,
      },
    });
  };
}

export function selectVenue(venueId) {
  return {
    type: SELECT_VENUE,
    payload: {
      venueId,
    },
  };
}

export function closeSelectedVenue() {
  return {
    type: CLOSE_SELECTED_VENUE,
  };
}
