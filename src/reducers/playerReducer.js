import {actionTypes} from "../actions/playerActions";

const initialState = {currentSong: null, playlistActive: false};

export function player(state = initialState, action) {
  switch (action.type) {

    case actionTypes.playSong:
      return {...state, currentSong: action.video};

    case actionTypes.playlistActivate:
      return {...state, playlistActive: true};

    case actionTypes.playlistDeactivate:
      return {...state, playlistActive: false};

    default:
      return state;
  }
}
