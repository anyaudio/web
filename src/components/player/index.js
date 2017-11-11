import React from 'react';

import api from '../../utils/api';

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {streamURL: null};
    this.props.playNext()
  }

  componentDidMount() {
    let audioElement = document.getElementById('audio-player');
    if (!audioElement) {
      return;
    }
    audioElement.addEventListener('ended', (e) => {
      this.props.playNext();
    });
  }

  componentWillReceiveProps(newProps) {
    api.fetchStreamURL(newProps.currentSong.stream_url)
      .then(url => this.setState({...this.state, streamURL: url}));
    this.props.getSuggestions(newProps.currentSong.suggest_url);
  }

  render() {
    return (
      <div>
        Playing {this.props.currentSong && this.props.currentSong.title}...
        <div>
          <audio id='audio-player' src={this.state.streamURL} autoPlay={true} controls={true} preload='metadata'>Audio not supported!!</audio>
        </div>
      </div>
    )
  }
}
