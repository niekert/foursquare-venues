export function getVenuesList(venuesState) {
  // For now, we always select the venues in the first group. This could be changed
  // If we extend the app's capabilities
  return venuesState.venues ? venuesState.venues.groups[0].items : [];
}

export function getMapBounds(venuesState) {
  return venuesState.venues ? venuesState.venues.suggestedBounds.ne : null;
}
