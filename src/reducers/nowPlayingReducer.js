import {actionType} from "../actions/nowPlayingActions";
import {removeDuplicateSongs} from "../utils/removeDuplicates";
import {anyCommonSong, removeDuplicateIn, songInArray} from '../utils/songSearchUtils';

const initialState = {nextSongs: [], suggestedSongs: [], dispatchNext: false, previousSongs: []};

export function nowPlaying(state = initialState, action) {
  switch (action.type) {
    case actionType.songAdd:
      let songs = state.nextSongs.slice(0);
      songs.push(action.song);
      let prev = state.previousSongs.filter(item => !songInArray(item, songs));
      let suggestions = state.suggestedSongs;
      if (anyCommonSong(suggestions, songs)) {
        suggestions = removeDuplicateIn(suggestions, songs);
      }
      return {...state, nextSongs: removeDuplicateSongs(songs), previousSongs: prev, suggestedSongs: suggestions};

    case actionType.songRemove:
      let newSongs = state.nextSongs.filter(song => song.id !== action.song.id);
      return {...state, nextSongs: newSongs};

    case actionType.playNext:
      return {...state, dispatchNext: true};

    case actionType.playedNext:
      prev = state.previousSongs.slice(0);
      prev.push(action.song);
      prev = removeDuplicateSongs(prev);
      if (anyCommonSong(state.suggestedSongs, prev)) {
        suggestions = removeDuplicateIn(state.suggestedSongs, prev);
      }
      return {...state, dispatchNext: false, previousSongs: prev};

    case actionType.playPrev:
      if(state.previousSongs.length >= 2) {
        let prev = state.previousSongs.slice(0, state.previousSongs.length - 2)
        let songsToPlay = state.previousSongs.slice(state.previousSongs.length - 2)
        let next = state.nextSongs.slice(0)
        next = next.filter(item => !songInArray(item, songsToPlay));
        next.unshift(...songsToPlay)
        return {
          ...state,
          previousSongs: prev,
          nextSongs: next
        }
      }
      return state;

    case actionType.getSuggestions:
      if (action.suggestedSongs) {
        suggestions = removeDuplicateIn(removeDuplicateIn(action.suggestedSongs, state.previousSongs), state.nextSongs);
      } else {
        suggestions = [];
      }
      return {...state, suggestedSongs: removeDuplicateSongs(suggestions)};

    default:
      return state;
  }
}
