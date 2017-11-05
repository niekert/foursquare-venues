import reduce from '../reducer';
import {
  FETCH_VENUES_BY_GEO,
  FETCH_VENUES_BY_SEARCH,
  FETCH_VENUES_SUCCESS,
  FETCH_VENUES_ERROR,
  CLOSE_SELECTED_VENUE,
  SELECT_VENUE,
} from '../actions';

describe('venuesReducer', () => {
  test(`${FETCH_VENUES_BY_GEO}`, () => {
    const initialState = { mock: 'true ' };
    const result = reduce(initialState, {
      type: FETCH_VENUES_BY_GEO,
      payload: { latLng: 'mock' },
    });

    expect(result).toMatchSnapshot();
  });

  test(`${FETCH_VENUES_BY_SEARCH}`, () => {
    const result = reduce(
      {},
      {
        type: FETCH_VENUES_BY_SEARCH,
        payload: { query: 'mock_query ' },
      },
    );

    expect(result).toMatchSnapshot();
  });

  test(`${FETCH_VENUES_SUCCESS}`, () => {
    const initialState = {
      isLoading: true,
      mock_key: 'mock',
    };

    const result = reduce(initialState, {
      type: FETCH_VENUES_SUCCESS,
      payload: {
        venues: 'mock_venues',
      },
    });

    expect(result).toMatchSnapshot();
  });

  test(`${SELECT_VENUE}`, () => {
    const intialState = {
      mock_key: 'do_not_overwrite',
    };

    const result = reduce(intialState, {
      type: SELECT_VENUE,
      payload: {
        venueId: 'selected_mock_venue',
      },
    });

    expect(result).toMatchSnapshot();
  });
});
