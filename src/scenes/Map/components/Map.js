import React, { Component } from 'react';
import { arrayOf, func, string, shape, number } from 'prop-types';
import { latLong, venue as venuePropType } from 'customPropTypes';
import { MyLocationMarker } from 'style/MapMarkers';
import {
  DEFAULT_MAP_LAT_LNG,
  DEFAULT_MAP_ZOOM,
  SELECTED_MAP_ZOOM,
} from 'app-constants';
import { FullScreenMap, Loading } from 'shared/components';
import VenueMarker from './VenueMarker';

class Map extends Component {
  static propTypes = {
    selectVenue: func.isRequired,
    mapBounds: shape({
      north: number.isRequired,
      east: number.isRequired,
      west: number.isRequired,
      south: number.isRequired,
    }),
    closeSelectedVenue: func.isRequired,
    selectedVenueId: string,
    currentLocationLatLng: latLong,
    venues: arrayOf(venuePropType),
  };

  static defaultProps = {
    currentLocationLatLng: null,
    selectedVenueId: null,
    mapBounds: null,
    venues: [],
  };

  componentDidUpdate(prevProps) {
    if (
      this.mapElement &&
      this.props.mapBounds &&
      prevProps.mapBounds !== this.props.mapBounds
    ) {
      this.mapElement.fitBounds(this.props.mapBounds);
    }
  }

  render() {
    const {
      currentLocationLatLng,
      selectedVenueId,
      closeSelectedVenue,
      selectVenue,
      venues,
    } = this.props;

    return (
      <FullScreenMap
        onMapMounted={map => {
          this.mapElement = map;
        }}
        loadingElement={<Loading />}
        defaultZoom={DEFAULT_MAP_ZOOM}
        zoom={selectedVenueId ? SELECTED_MAP_ZOOM : DEFAULT_MAP_ZOOM}
        defaultCenter={DEFAULT_MAP_LAT_LNG}
      >
        {currentLocationLatLng && (
          <MyLocationMarker position={currentLocationLatLng} />
        )}
        {venues.map(venue => (
          <VenueMarker
            key={`venue-marker-${venue.referralId}`}
            isDetailsOpen={selectedVenueId === venue.referralId}
            closeDetails={closeSelectedVenue}
            venue={venue}
            onClick={() => selectVenue(venue.referralId)}
          />
        ))}
      </FullScreenMap>
    );
  }
}

export default Map;
