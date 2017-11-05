import { get, take } from 'lodash';
/**
 * Get the urls of the photo of a venue in a given size
 * @param {*} venue the venue to get photos of
 * @param {*} amount the amount of photos
 * @param {*} size the size of each foto
 */
export function getPhotoUrls(venue, amount = 6, size = '100x100') {
  const photos = get(venue, 'photos.groups[0].items', []);
  const sliced = take(photos, amount);

  return sliced.map(photo => `${photo.prefix}${size}${photo.suffix}`);
}
