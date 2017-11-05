import { createReducer } from 'redux-create-reducer';
import {
  FETCH_VENUE_DETAILS,
  FETCH_VENUE_DETAILS_SUCCESS,
  FETCH_VENUE_DETAILS_ERROR,
} from './actions';

const initialState = {};

export default createReducer(initialState, {
  [FETCH_VENUE_DETAILS](state, action) {
    return {
      ...state,
      [action.payload.venueId]: {
        isLoading: true,
      },
    };
  },
  [FETCH_VENUE_DETAILS_SUCCESS](state, action) {
    return {
      ...state,
      [action.payload.venueId]: {
        isLoading: false,
        ...action.payload.venueDetails,
      },
    };
  },
  [FETCH_VENUE_DETAILS_ERROR](state, action) {
    return {
      ...state,
      [action.payload.venueId]: {
        isLoading: false,
        error: action.payload.error,
      },
    };
  },
});
