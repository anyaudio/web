import {actionType} from "../actions/nowPlayingActions";
import {removeDuplicateSongs} from "../utils/removeDuplicates";
import songInArray from '../utils/songInArray';

const initialState = {nextSongs: [], suggestedSongs: [], dispatchNext: false, previousSongs: []};

export function nowPlaying(state = initialState, action) {
  switch (action.type) {
    case actionType.songAdd:
      let songs = state.nextSongs.slice(0);
      songs.push(action.song);
      return {...state, nextSongs: removeDuplicateSongs(songs)};

    case actionType.songRemove:
      let newSongs = state.nextSongs.filter(song => song.id !== action.song.id);
      return {...state, nextSongs: newSongs};

    case actionType.playNext:
      return {...state, dispatchNext: true};

    case actionType.playedNext:
      let prev = state.previousSongs.slice(0);
      prev.push(action.song);
      console.log('Previous', prev);
      prev = removeDuplicateSongs(prev);
      console.log('Previous Now', prev);
      return {...state, dispatchNext: false, previousSongs: prev};

    case actionType.getSuggestions:
      let suggestions;
      if (action.suggestedSongs) {
        suggestions = action.suggestedSongs.filter(x => !(songInArray(x, state.previousSongs) || songInArray(x, state.nextSongs))).slice(0, 5);
      } else {
        suggestions = [];
      }
      return {...state, suggestedSongs: removeDuplicateSongs(suggestions)};

    default:
      return state;
  }
}
