export const actionTypes = {
  playSong: 'PLAY_SONG'
};

export function playSong(video) {
  return dispatch => dispatch({type: actionTypes.playSong, video})
}
