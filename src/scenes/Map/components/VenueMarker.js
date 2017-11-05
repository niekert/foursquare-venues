import React from 'react';
import { Marker } from 'react-google-maps';
import { func, bool } from 'prop-types';
import { venue as venuePropType } from 'customPropTypes';
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox';
import VenueDetails from './VenueDetails';

function VenueMarker({
  venue: venueDetails,
  onClick,
  isDetailsOpen,
  closeDetails,
}) {
  const { location } = venueDetails.venue;

  return (
    <Marker
      position={{ lat: location.lat, lng: location.lng }}
      onClick={onClick}
    >
      {isDetailsOpen && (
        <InfoBox onCloseClick={closeDetails}>
          <VenueDetails venue={venueDetails} />
        </InfoBox>
      )}
    </Marker>
  );
}

VenueMarker.propTypes = {
  venue: venuePropType.isRequired,
  closeDetails: func.isRequired,
  isDetailsOpen: bool.isRequired,
  onClick: func.isRequired,
};
export default VenueMarker;
