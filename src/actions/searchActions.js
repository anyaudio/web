import api from '../utils/api';

export const actionsType = {
  searchSuccess: 'SEARCH_SUCCESS',
  searchInit: 'SEARCH_INIT'
};

export const searchStatus = {
  notSearching: 0,
  searching: 1,
  searched: 2,
  searchFailed: 3
};

export function search(query) {
  return dispatch => {
    api.search(query)
      .then(videos => dispatch({type: actionsType.searchSuccess, videos}));
  }
}

export function searchInit() {
  return dispatch => dispatch({type: actionsType.searchInit});
}
