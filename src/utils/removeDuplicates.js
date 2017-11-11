export function removeDuplicateVideos(videos) {
  let reversed = videos.slice(0).reverse();
  let unique = reversed.filter(function(elem, index, self) {
    return index === self.indexOf(elem);
  });
  unique.reverse();
  return unique;
}
