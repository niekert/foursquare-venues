import { fetchVenueDetails as fetchVenueDetailsFromApi } from 'api/venues';

export const FETCH_VENUE_DETAILS = 'FETCH_VENUE_DETAILS';
export const FETCH_VENUE_DETAILS_SUCCESS = 'FETCH_VENUE_DETAILS_SUCCESS';
export const FETCH_VENUE_DETAILS_ERROR = 'FETCH_VENUE_DETAILS_ERROR';

export function fetchVenueDetails(venueId) {
  return async dispatch => {
    dispatch({
      type: FETCH_VENUE_DETAILS,
      payload: { venueId },
    });

    try {
      const venueDetails = await fetchVenueDetailsFromApi(venueId);
      dispatch({
        type: FETCH_VENUE_DETAILS_SUCCESS,
        payload: { venueId, venueDetails },
      });
    } catch (error) {
      dispatch({
        type: FETCH_VENUE_DETAILS_ERROR,
        payload: { error, venueId },
      });
    }
  };
}
