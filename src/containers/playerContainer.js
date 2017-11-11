import {connect} from 'react-redux';

import Player from '../components/player';
import {playSong} from "../actions/playerActions";

function mapStateToProps(state) {
  return {
    currentSong: state.player.currentSong
  }
}

export default connect(
  mapStateToProps,
  {
    playSong: playSong
  }
)(Player);
