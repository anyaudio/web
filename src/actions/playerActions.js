export const actionTypes = {
  playSong: 'PLAY_SONG',
  playlistActivate: 'PLAYLIST_ACTIVATE',
  playlistDeactivate: 'PLAYLIST_DEACTIVATE',
};

export function playSong(video) {
  return dispatch => dispatch({type: actionTypes.playSong, video})
}

export const activatePlaylist = () => {
  return dispatch => dispatch({type: actionTypes.playlistActivate})
};

export const deactivatePlaylist = () => {
  return dispatch => dispatch({type: actionTypes.playlistDeactivate})
};
