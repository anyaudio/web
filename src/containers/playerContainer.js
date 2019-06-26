import {connect} from 'react-redux';

import Player from '../components/player';
import {playSong} from "../actions/playerActions";
import {playNext, getSuggestions, playedNext, playPrev} from "../actions/nowPlayingActions";
import {activatePlaylist, deactivatePlaylist} from '../actions/playerActions';

function mapStateToProps(state) {
  return {
    currentSong: state.player.currentSong,
    playlistActive: state.player.playlistActive,
    prevSongs: state.nowPlaying.previousSongs
  }
}

export default connect(
  mapStateToProps,
  {
    playSong: playSong,
    playNext: playNext,
    getSuggestions: getSuggestions,
    playedNext: playedNext,
    activatePlaylist,
    deactivatePlaylist,
    playPrev
  }
)(Player);
