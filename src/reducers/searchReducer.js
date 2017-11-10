import {actionsType, searchStatus} from "../actions/searchActions";

export function search(state={videos: [], searchStatus: searchStatus.notSearching}, action) {
  switch (action.type) {

    case actionsType.searchSuccess:
      return {...state, videos: action.videos, searchStatus: searchStatus.searched};

    case actionsType.searchInit:
      return {...state, videos: [], searchStatus: searchStatus.searching};

    default:
      return state;
  }
}
