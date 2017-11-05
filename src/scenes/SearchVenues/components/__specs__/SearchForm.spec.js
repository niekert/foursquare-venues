import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchForm from '../SearchForm';

jest.mock('scenes/VenuesList', () => 'VenuesList');

describe('SearchForm', () => {
  let props;
  beforeEach(() => {
    props = {
      fetchVenuesBySearch: jest.fn(),
      fetchVenuesByGeoLocation: jest.fn(),
      activeSearchType: null,
    };
  });

  test('renders correctly', () => {
    const wrapper = shallow(<SearchForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('fetches venues by search when submitting form', () => {
    const wrapper = mount(<SearchForm {...props} />);
    const mockSearchQuery = 'mock_search_query';

    wrapper
      .find('input')
      .simulate('change', { target: { value: mockSearchQuery } });

    wrapper.find('form').simulate('submit');

    expect(props.fetchVenuesBySearch).toHaveBeenCalledTimes(1);
    expect(props.fetchVenuesBySearch).toHaveBeenLastCalledWith(mockSearchQuery);
  });
});
