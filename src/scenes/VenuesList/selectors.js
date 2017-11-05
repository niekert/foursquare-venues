import { get } from 'lodash-es';

export const getThumbnailUrl = (venue, size = '50x50') => {
  const thumbnailDetails = get(venue, 'photos.groups[0].items[0]');

  return thumbnailDetails
    ? `${thumbnailDetails.prefix}${size}${thumbnailDetails.suffix}`
    : null;
};

/**
 * Get the first category a venue is placed in
 * @param {*} venue The venues category
 */
export const getCategory = venue =>
  venue.categories.length > 0 ? venue.categories[0] : null;
