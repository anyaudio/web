import {actionType} from '../actions/trendingActions';

const initialState = {playlists: {}};

export function trending(state = initialState, action) {
  switch (action.type) {

    case actionType.getPlaylists:
      let playlists = {};
      let keys = Object.keys(action.playlists);
      for (let key in keys) {
        key = keys[key];
        let playlist = action.playlists[key];
        if (action.playlists[key].length > 0) {
          playlists[key] = playlist;
        }
      }
      return {...state, playlists: playlists};

    default:
      return state;
  }
}
