import { createReducer } from 'redux-create-reducer';
import { SEARCH_TYPE_CURRENT_GEO, SEARCH_TYPE_QUERY } from 'app-constants';
import {
  FETCH_VENUES_BY_GEO,
  FETCH_VENUES_BY_SEARCH,
  FETCH_VENUES_SUCCESS,
  FETCH_VENUES_ERROR,
  CLOSE_SELECTED_VENUE,
  SELECT_VENUE,
} from './actions';

const defaultState = {
  venues: null,
  selectedVenueId: null,
  isLoading: false,
  currentGeoLatLng: null,
  query: null,
};

export default createReducer(defaultState, {
  [FETCH_VENUES_BY_GEO](state, action) {
    return {
      ...state,
      isLoading: true,
      currentGeoLatLng: action.payload.latLng,
      searchType: SEARCH_TYPE_CURRENT_GEO,
    };
  },
  [FETCH_VENUES_BY_SEARCH](state, action) {
    return {
      ...state,
      query: action.payload.query,
      isLoading: true,
      searchType: SEARCH_TYPE_QUERY,
    };
  },
  [FETCH_VENUES_SUCCESS](state, action) {
    return {
      ...state,
      isLoading: false,
      venues: action.payload.venues,
    };
  },
  [FETCH_VENUES_ERROR](state, action) {
    return {
      ...state,
      isLoading: false,
      error: action.payload.error,
    };
  },
  [SELECT_VENUE](state, action) {
    return {
      ...state,
      selectedVenueId: action.payload.venueId,
    };
  },
  [CLOSE_SELECTED_VENUE](state) {
    return {
      ...state,
      selectedVenueId: null,
    };
  },
});
