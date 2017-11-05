export function getVenuesList(venuesState) {
  // For now, we always select the venues in the first group. This could be changed
  // If we extend the app's capabilities
  return venuesState.venues && venuesState.venues.groups
    ? venuesState.venues.groups[0].items
    : [];
}

/**
 * Get the recommended map bounds in a literal that the google maps API supports
 * https://developers.google.com/maps/documentation/javascript/3.exp/reference#LatLngBoundsLiteral
 * @param {*} venuesState
 */
export function getMapBoundsLiteral(venuesState) {
  if (!venuesState.venues) {
    return null;
  }

  const { ne, sw } = venuesState.venues.suggestedBounds;
  return {
    east: ne.lng,
    north: ne.lat,
    south: sw.lat,
    west: sw.lng,
  };
}
