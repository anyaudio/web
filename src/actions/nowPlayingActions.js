export const actionType = {
  videoAdd: 'VIDEO_ADD',
  videoRemove: 'VIDEO_REMOVE'
};

export function addVideo(video) {
  return dispatch => dispatch({type: actionType.videoAdd, video});
}

export function removeVideo(video) {
  return dispatch => dispatch({type: actionType.videoRemove, video})
}
