export const actionType = {
  videoAdd: 'VIDEO_ADD',
  videoRemove: 'VIDEO_REMOVE',
  playNext: 'PLAY_NEXT',
  playedNext: 'PLAYED_NEXT'
};

export function addVideo(video) {
  return dispatch => dispatch({type: actionType.videoAdd, video});
}

export function removeVideo(video) {
  return dispatch => dispatch({type: actionType.videoRemove, video});
}

export function playNext() {
  return dispatch => dispatch({type: actionType.playNext});
}

export function playedNext() {
  return dispatch => dispatch({type: actionType.playedNext});
}
