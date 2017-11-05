import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from '../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('VenuesActions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  test('fetchVenuesByGeoLocation', () => {
    const expectedVenues = 'unit_testing_wow';
    const mockResponse = { response: expectedVenues };
    const mockPosition = {
      coords: {
        latitude: 52,
        longitude: 53,
      },
    };

    fetchMock.getOnce(
      'begin:https://api.foursquare.com/v2/venues/explore',
      mockResponse,
    );

    const store = mockStore({});

    const expectedActions = [
      {
        type: actions.FETCH_VENUES_BY_GEO,
        payload: { latLng: { lat: 52, lng: 53 } },
      },
      {
        type: actions.FETCH_VENUES_SUCCESS,
        payload: { venues: expectedVenues },
      },
    ];

    return store
      .dispatch(actions.fetchVenuesByGeoLocation(mockPosition))
      .then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  test('fetchVenuesBySearch', () => {
    const expectedVenues = 'unit_testing_wow';
    const mockResponse = { response: expectedVenues };
    fetchMock.getOnce(
      'begin:https://api.foursquare.com/v2/venues/explore',
      mockResponse,
    );

    const searchQuery = 'unit_tested_query';

    const store = mockStore({});

    const expectedActions = [
      {
        type: actions.FETCH_VENUES_BY_SEARCH,
        payload: { query: searchQuery },
      },
      {
        type: actions.FETCH_VENUES_SUCCESS,
        payload: { venues: expectedVenues },
      },
    ];

    return store.dispatch(actions.fetchVenuesBySearch(searchQuery)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
