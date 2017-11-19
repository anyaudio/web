import _ from 'lodash';

export const songInArray = (song, arr) => {
  return _.some(arr, item => item.id === song.id);
};

export const anyCommonSong = (left_arr, right_arr) => {
  return _.some(left_arr, left_item => _.some(right_arr, right_item => left_item.id === right_item.id));
};

export const removeDuplicateIn = (playListToRemoveFrom, otherPlaylist) => {
  return playListToRemoveFrom.filter(x => !(songInArray(x, otherPlaylist)));
};
