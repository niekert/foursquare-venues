import { connect } from 'react-redux';
import { selectVenue, closeSelectedVenue } from 'data/venues/actions';
import { getVenuesList, getMapBoundsLiteral } from 'data/venues/selectors';
import Map from './components/Map';

function mapStateToProps(state) {
  const { venues } = state.data;

  return {
    isLoading: venues.isLoading,
    currentLocationLatLng: venues.currentGeoLatLng,
    selectedVenueId: venues.selectedVenueId,
    mapBounds: getMapBoundsLiteral(venues),
    venues: getVenuesList(venues),
  };
}

export default connect(mapStateToProps, { selectVenue, closeSelectedVenue })(
  Map,
);
