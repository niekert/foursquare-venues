import React from 'react';
import { func, string } from 'prop-types';
import { connect } from 'react-redux';
import { closeSelectedVenue } from 'data/venues/actions';
import { fetchVenueDetails } from './actions';
import { getPhotoUrls } from './selectors';
import VenueDetails from './components';

class VenueDetailsScene extends React.Component {
  static propTypes = {
    fetchVenueDetails: func.isRequired,
    venueId: string.isRequired,
  };

  componentDidMount() {
    this.props.fetchVenueDetails(this.props.venueId);
  }

  render() {
    return <VenueDetails {...this.props} />;
  }
}

function mapStateToProps(state) {
  const { selectedVenueId } = state.data.venues;
  const selectedVenue = state.venueDetails[selectedVenueId];

  if (!selectedVenue) {
    return {
      venueId: selectedVenueId,
      isLoading: true,
    };
  }

  return {
    isLoading: false,
    photoUrls: getPhotoUrls(selectedVenue),
    rating: selectedVenue.rating,
    ratingColor: selectedVenue.ratingColor,
    name: selectedVenue.name,
    venueId: selectedVenueId,
  };
}

export default connect(mapStateToProps, {
  closeSelectedVenue,
  fetchVenueDetails,
})(VenueDetailsScene);
