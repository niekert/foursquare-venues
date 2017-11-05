import React from 'react';
import { shallow } from 'enzyme';
import VenueMarker from '../VenueMarker';

describe('<VenueMarker />', () => {
  let sharedProps;
  beforeEach(() => {
    sharedProps = {
      venue: {
        venue: {
          location: {
            lat: 52,
            lng: 53,
          },
        },
      },
      onClick: jest.fn(),
    };
  });

  test('Renders correctly', () => {
    const wrapper = shallow(<VenueMarker {...sharedProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders correctly when open', () => {
    const wrapper = shallow(<VenueMarker {...sharedProps} isDetailsOpen />);
    expect(wrapper).toMatchSnapshot();
  });
});
