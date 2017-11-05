import { combineReducers } from 'redux';
import venuesReducer from './venues/reducer';

export default combineReducers({
  venues: venuesReducer,
});
