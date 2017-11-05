import { connect } from 'react-redux';
import {
  fetchVenuesByGeoLocation,
  fetchVenuesBySearch,
} from 'data/venues/actions';
import SearchForm from './components/SearchForm';

export default connect(null, { fetchVenuesByGeoLocation, fetchVenuesBySearch })(
  SearchForm,
);
