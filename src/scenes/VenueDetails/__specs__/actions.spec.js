import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  FETCH_VENUE_DETAILS,
  FETCH_VENUE_DETAILS_SUCCESS,
  FETCH_VENUE_DETAILS_ERROR,
  fetchVenueDetails,
} from '../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('VenuedetailsActions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  test('fetchVenueDetails', () => {
    const mockVenueId = 'mock_venue';
    const mockResponse = {
      response: { venue: { id: mockVenueId, name: 'mock_venue_wow' } },
    };

    fetchMock.getOnce(
      'begin:https://api.foursquare.com/v2/venues/mock_venue',
      mockResponse,
    );

    const store = mockStore();
    const expectedActions = [
      {
        type: FETCH_VENUE_DETAILS,
        payload: { venueId: mockVenueId },
      },
      {
        type: FETCH_VENUE_DETAILS_SUCCESS,
        payload: {
          venueId: mockVenueId,
          venueDetails: mockResponse.response.venue,
        },
      },
    ];

    return store.dispatch(fetchVenueDetails(mockVenueId)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
