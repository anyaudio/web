import _ from 'lodash';

export function removeDuplicateSongs(videos) {
  let reversed = videos.slice(0).reverse();
  let unique = _.uniq(reversed, item => item.id);
  unique.reverse();
  return unique;
}
