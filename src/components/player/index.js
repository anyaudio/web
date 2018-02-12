import React from 'react';
import plyr from 'plyr';

import 'plyr/dist/plyr.css';
import './css/player.css'

import api from '../../utils/api';
import notify from '../../utils/notification';
import { keys } from '../../constants';

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {streamURL: null};
    this.props.playNext()
  }

  componentDidMount() {
    // Adding keydown event listener to window element
    window.addEventListener('keydown', (e) => this.handleKeyboardEvents(e));

    // Audio player configuration
    plyr.setup({
      html: [
        "<div class='plyr__controls'>",
        "<button type='button' data-plyr='play'>",
        "<svg><use xlink:href='#plyr-play'></use></svg>",
        "<span class='plyr__sr-only'>Play</span>",
        "</button>",
        "<button type='button' data-plyr='pause'>",
        "<svg><use xlink:href='#plyr-pause'></use></svg>",
        "<span class='plyr__sr-only'>Pause</span>",
        "</button>",
        "<button type='button' id='next-btn'>",
        "<svg><use xlink:href='#plyr-fast-forward'></use></svg>",
        "<span class='plyr__sr-only'>Forward {seektime} secs</span>",
        "</button>",
          "<span class='plyr__progress'>",
            "<label for='seek{id}' class='plyr__sr-only'>Seek</label>",
            "<input id='seek{id}' class='plyr__progress--seek' type='range' min='0' max='100' step='0.1' value='0' data-plyr='seek'>",
            "<progress class='plyr__progress--played' max='100' value='0' role='presentation'></progress>",
            "<progress class='plyr__progress--buffer' max='100' value='0'>",
              "<span>0</span>% buffered",
            "</progress>",
            "<span class='plyr__tooltip'>00:00</span>",
          "</span>",
          "<span class='plyr__time'>",
            "<span class='plyr__sr-only'>Current time</span>",
            "<span class='plyr__time--current'>00:00</span>",
          "</span>",
          "<span class='plyr__time'>",
            "<span class='plyr__sr-only'>Duration</span>",
            "<span class='plyr__time--duration'>00:00</span>",
          "</span>",
          "<button type='button' data-plyr='mute'>",
            "<svg class='icon--muted'><use xlink:href='#plyr-muted'></use></svg>",
            "<svg><use xlink:href='#plyr-volume'></use></svg>",
            "<span class='plyr__sr-only'>Toggle Mute</span>",
          "</button>",
          "<span class='plyr__volume'>",
            "<label for='volume{id}' class='plyr__sr-only'>Volume</label>",
            "<input id='volume{id}' class='plyr__volume--input' type='range' min='0' max='10' value='5' data-plyr='volume'>",
            "<progress class='plyr__volume--display' max='10' value='0' role='presentation'></progress>",
          "</span>",
        "</div>"].join("")
    });

    this.audioElement.addEventListener('ended', (e) => {
      this.props.playNext();
    });
    this.audioElement.addEventListener('error', (e) => {
      console.log('ERROR: Error while playing audio ', e);
      this.props.playNext();
    });

    // Next on button click
    let nextButton = document.getElementById('next-btn');
    if (nextButton) {
      nextButton.onclick = (e) => {
        this.props.playNext();
      }
    }
  }

  handleKeyboardEvents(e) {
    switch (e.keyCode) {
      case keys.SPACE:
        this.audioElement.paused === false ? this.audioElement.pause() : this.audioElement.play();
        e.preventDefault();
        break;
      case keys.RIGHT_ARROW:
        this.audioElement.currentTime += 10;
        e.preventDefault();
        break;
      case keys.LEFT_ARROW:
        this.audioElement.currentTime -= 10;
        e.preventDefault();
        break;
      case keys.UP_ARROW:
        this.audioElement.volume = this.audioElement.volume <= 0.9 ? this.audioElement.volume + 0.1 : 1;
        e.preventDefault();
        break;
      case keys.DOWN_ARROW:
        this.audioElement.volume = this.audioElement.volume >= 0.1 ? this.audioElement.volume - 0.1 : 0;
        e.preventDefault();
        break;
      case keys.N:
        this.props.playNext();
        break;
      case keys.F:
          let searchElement = document.getElementById('search-input');
          if (searchElement) {
            searchElement.focus();
          }
          e.preventDefault();
          break;
      default:
        return;
      }
    };

  componentWillReceiveProps(newProps) {
    api.fetchStreamURL(newProps.currentSong.stream_url)
      .then(url => {
        this.setState({...this.state, streamURL: url});
        notify('Playing now...', newProps.currentSong.title);
      });
    this.props.getSuggestions(newProps.currentSong.suggest_url);
    this.props.playedNext(newProps.currentSong)
  }

  render() {
    return (
      <div className="player-wrapper" style={{display: this.state.streamURL ? 'flex' : 'none'}}>
        <div className="player-meta">
          <div className="player-album-art uk-margin-right">
            <img className="" src={this.props.currentSong && this.props.currentSong.thumb} alt="Album Art"/>
          </div>
          <div className="player-name-artist">
            <div className="player-name">{this.props.currentSong && this.props.currentSong.title}</div>
            <div className="player-artist">{this.props.currentSong && this.props.currentSong.uploader}</div>
            {console.log(this.props.currentSong)}
          </div>
          {/*{this.props.currentSong && this.props.currentSong.title}*/}
        </div>

        <div className="player">
          <audio id='audio-player' ref={ref => this.audioElement = ref} src={this.state.streamURL} autoPlay={true} controls={true} preload='auto'>
            Audio not supported!!
          </audio>
        </div>
      </div>
    )
  }
}
