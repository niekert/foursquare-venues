import { connect } from 'react-redux';
import {
  fetchVenuesByGeoLocation,
  fetchVenuesBySearch,
} from 'data/venues/actions';
import SearchForm from './components/SearchForm';

function mapStateToProps(state) {
  const { venues } = state.data;
  return {
    activeSearchType: venues.searchType,
  };
}

export default connect(mapStateToProps, {
  fetchVenuesByGeoLocation,
  fetchVenuesBySearch,
})(SearchForm);
