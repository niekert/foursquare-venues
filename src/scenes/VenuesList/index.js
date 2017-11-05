import { connect } from 'react-redux';
import { compose, branch, renderNothing } from 'recompose';
import { selectVenue } from 'data/venues/actions';
import { getVenuesList } from 'data/venues/selectors';
import VenuesList from './components/VenuesList';

function mapStateToProps(state) {
  return {
    venues: getVenuesList(state.data.venues),
  };
}

const enhance = compose(
  connect(mapStateToProps, { selectVenue }),
  // Only render the list if there's a venue available
  branch(({ venues }) => venues.length < 1, renderNothing),
);

export default enhance(VenuesList);
