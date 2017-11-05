import { connect } from 'react-redux';
import { getVenuesList, getMapBounds } from 'data/venues/selectors';
import Map from './components/Map';

function mapStateToProps(state) {
  const { venues } = state.data;

  return {
    isLoading: venues.isLoading,
    currentLocationLatLng: venues.currentGeoLatLng,
    mapBounds: getMapBounds(venues),
    venues: getVenuesList(venues),
  };
}

export default connect(mapStateToProps)(Map);
