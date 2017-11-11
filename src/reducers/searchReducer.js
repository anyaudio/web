import {actionsType, searchStatus} from "../actions/searchActions";

const initialState = {videos: [], searchStatus: searchStatus.notSearching, numberResults: 0};

export function search(state = initialState, action) {
  switch (action.type) {

    case actionsType.searchSuccess:
      return {...state, videos: action.videos.results, searchStatus: searchStatus.searched,
        numberResults: action.videos.metadata.count};

    case actionsType.searchInit:
      return {...state, videos: [], searchStatus: searchStatus.searching, numberResults: 0};

    default:
      return state;
  }
}
