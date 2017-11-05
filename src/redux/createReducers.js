import { combineReducers } from 'redux';
import dataReducer from 'data/reducer';
import venueDetailsReducer from 'scenes/VenueDetails/reducer';

export default function createReducers() {
  return combineReducers({
    data: dataReducer,
    venueDetails: venueDetailsReducer,
  });
}
