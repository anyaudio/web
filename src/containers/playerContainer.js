import {connect} from 'react-redux';

import Player from '../components/player';
import {playSong} from "../actions/playerActions";
import {playNext} from "../actions/nowPlayingActions";

function mapStateToProps(state) {
  return {
    currentSong: state.player.currentSong
  }
}

export default connect(
  mapStateToProps,
  {
    playSong: playSong,
    playNext: playNext
  }
)(Player);
