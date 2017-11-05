import { withGoogleMap, withScriptjs, GoogleMap } from 'react-google-maps';
import { compose, withProps } from 'recompose';

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const enhance = compose(
  withProps({
    // Initialize Google Maps API with the correct API key
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
  }),
  withScriptjs,
  withGoogleMap,
);

export default enhance(GoogleMap);
