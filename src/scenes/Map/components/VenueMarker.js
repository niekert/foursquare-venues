import React from 'react';
import { venue as venuePropType } from 'customPropTypes';
import { Marker } from 'react-google-maps';

function VenueMarker({ venue: venueDetails }) {
  const { location } = venueDetails.venue;

  return <Marker position={{ lat: location.lat, lng: location.lng }} />;
}

VenueMarker.propTypes = {
  venue: venuePropType.isRequired,
};
export default VenueMarker;
