import React, { Component } from 'react';
import { arrayOf, func, string, shape, number } from 'prop-types';
import { latLong, venue as venuePropType } from 'customPropTypes';
import { getVenueId } from 'data/venues/selectors';
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
      // TODO: Don't use stringify but use a proper shallow compare
      JSON.stringify(prevProps.mapBounds) !==
        JSON.stringify(this.props.mapBounds)
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
        {venues.map(venue => {
          const venueId = getVenueId(venue);
          return (
            <VenueMarker
              key={`venue-marker-${venueId}`}
              isDetailsOpen={selectedVenueId === venueId}
              closeDetails={closeSelectedVenue}
              venue={venue}
              onClick={() => selectVenue(venueId)}
            />
          );
        })}
      </FullScreenMap>
    );
  }
}

export default Map;
