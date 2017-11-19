import {connect} from 'react-redux';

import Sidebar from '../components/sideBar';
import {removeSong, playedNext, addSong} from "../actions/nowPlayingActions";
import {playSong} from "../actions/playerActions";

function mapStateToProps(state) {
  return {
    nextSongs: state.nowPlaying.nextSongs,
    prevSongs: state.nowPlaying.previousSongs,
    suggestedSongs: state.nowPlaying.suggestedSongs,
    dispatchNext: state.nowPlaying.dispatchNext,
    currentSong: state.player.currentSong
  }
}

export default connect(
  mapStateToProps,
  {
    removeSong: removeSong,
    playedNext: playedNext,
    playSong: playSong,
    addToNowPlaying: addSong
  }
)(Sidebar);
