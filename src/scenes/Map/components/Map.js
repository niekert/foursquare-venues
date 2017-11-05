import React, { Component } from 'react';
import { arrayOf } from 'prop-types';
import { latLong, venue as venuePropType } from 'customPropTypes';
import { MyLocationMarker } from 'style/MapMarkers';
import { DEFAULT_MAP_LAT_LNG, DEFAULT_MAP_ZOOM } from 'app-constants';
import { FullScreenMap, Loading } from 'shared/components';
import VenueMarker from './VenueMarker';

class Map extends Component {
  static propTypes = {
    currentLocationLatLng: latLong,
    venues: arrayOf(venuePropType),
  };

  static defaultProps = {
    currentLocationLatLng: null,
    venues: [],
  };

  componentDidUpdate() {
    // TODO: Move to map bounds if changed from search.
  }

  render() {
    const { currentLocationLatLng, venues } = this.props;

    return (
      <FullScreenMap
        loadingElement={<Loading />}
        defaultZoom={DEFAULT_MAP_ZOOM}
        defaultCenter={DEFAULT_MAP_LAT_LNG}
      >
        {currentLocationLatLng && (
          <MyLocationMarker position={currentLocationLatLng} />
        )}
        {venues.map(venue => (
          <VenueMarker key={`venue-marker-${venue.referralId}`} venue={venue} />
        ))}
      </FullScreenMap>
    );
  }
}

export default Map;
