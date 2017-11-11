import {connect} from 'react-redux';

import Sidebar from '../components/sideBar';
import {removeVideo, playedNext} from "../actions/nowPlayingActions";
import {playSong} from "../actions/playerActions";

function mapStateToProps(state) {
  return {
    videos: state.nowPlaying.videos,
    suggestedVideos: state.nowPlaying.suggestedVideos,
    dispatchNext: state.nowPlaying.dispatchNext
  }
}

export default connect(
  mapStateToProps,
  {
    removeVideo: removeVideo,
    playedNext: playedNext,
    playSong: playSong
  }
)(Sidebar);
