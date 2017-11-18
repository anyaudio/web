import _ from 'lodash';

export default (song, arr) => {
  return _.some(arr, item => item.id === song.id);
}
