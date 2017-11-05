import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { isDev } from 'shared/util/env';
import createReducers from './createReducers';

export default function createReduxStore() {
  const composeEnhancers =
    (isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; // eslint-disable-line

  const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));

  const reducers = createReducers();
  return createStore(reducers, {}, enhancer);
}
