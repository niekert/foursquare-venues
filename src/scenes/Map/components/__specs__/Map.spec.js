import React from 'react';
import * as venuesSelectors from 'data/venues/selectors';
import { shallow } from 'enzyme';
import Map from '../Map';

describe('<Map />', () => {
  let sharedProp;
  beforeEach(() => {
    venuesSelectors.getVenueId = () => 'mock-venue-id';

    sharedProp = {
      currentLocationLatLng: {
        lat: 52,
        lng: 53,
      },
      selectedVenueId: 'mock_venue',
      venues: ['fake-venue-1', 'fake-venue-2', 'fake-venue-3', 'mock-venue-id'],
    };
  });

  test('renders correctly', () => {
    const wrapper = shallow(<Map {...sharedProp} />);
    expect(wrapper).toMatchSnapshot();
  });
});
