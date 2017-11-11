import {connect} from 'react-redux';

import Sidebar from '../components/sideBar';
import {removeVideo} from "../actions/nowPlayingActions";

function mapStateToProps(state) {
  return {
    videos: state.nowPlaying.videos
  }
}

export default connect(
  mapStateToProps,
  {
    removeVideo: removeVideo
  }
)(Sidebar);
