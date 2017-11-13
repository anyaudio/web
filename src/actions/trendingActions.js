import api from '../utils/api';

export const actionType = {
 getPlaylists: 'GET_PLAYLISTS'
};

export function getPlaylists(count) {
  return dispatch => api.getPlaylists()
    .then(playlists => {
      api.getPlaylistSongs(playlists, count)
        .then(playlists => dispatch({
          type: actionType.getPlaylists,
          playlists: playlists
        }))
    });
}
