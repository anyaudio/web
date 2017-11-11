import {connect} from 'react-redux';

import NavigationSearch from '../../components/navigation/navigationSearch';

import {searchInit, search} from "../../actions/searchActions";
import {addVideo} from "../../actions/nowPlayingActions";

function mapStateToProps(state) {
  return {
    videos: state.search.videos,
    searchStatus: state.search.searchStatus,
    numberResults: state.search.numberResults
  }
}

export default connect(
  mapStateToProps,
  {
    initSearch: searchInit,
    search: search,
    addToNowPlaying: addVideo
  }
)(NavigationSearch);
