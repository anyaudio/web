import api from '../utils/api';

export const actionType = {
  songAdd: 'SONG_ADD',
  songRemove: 'SONG_REMOVE',
  playNext: 'PLAY_NEXT',
  playPrev: 'PLAY_PREV',
  playedNext: 'PLAYED_NEXT',
  getSuggestions: 'GET_SUGGESTIONS'
};

export function addSong(song) {
  return dispatch => dispatch({type: actionType.songAdd, song});
}

export function removeSong(song) {
  return dispatch => dispatch({type: actionType.songRemove, song});
}

export function playNext() {
  return dispatch => dispatch({type: actionType.playNext});
}

export function playPrev() {
  return dispatch => dispatch({ type: actionType.playPrev })
}

export function playedNext(song) {
  return dispatch => dispatch({type: actionType.playedNext, song});
}

export function getSuggestions(suggestURL) {
  return dispatch => api.getSuggestions(suggestURL)
    .then(suggestedSongs => dispatch({type: actionType.getSuggestions, suggestedSongs}));
}
