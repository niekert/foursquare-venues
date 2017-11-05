import { combineReducers } from 'redux';
import dataReducer from 'data/reducer';

export default function createReducers() {
  return combineReducers({
    data: dataReducer,
  });
}
