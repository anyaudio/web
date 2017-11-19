import _ from 'lodash';

export const songInArray = (song, arr) => {
  return _.some(arr, item => item.id === song.id);
};

export const anyCommonSong = (left_arr, right_arr) => {
  return _.difference(left_arr, right_arr).length !== left_arr.length;
};

export const removeDuplicateIn = (playListToRemoveFrom, otherPlaylist) => {
  return playListToRemoveFrom.filter(x => !(songInArray(x, otherPlaylist)));
};
