import React from 'react';
import plyr from 'plyr';

import 'plyr/dist/plyr.css';
import './css/player.css'
import nextIcon from './img/icon-next.svg'
import pauseIcon from './img/pause-icon.svg'
import queueIcon from './img/queue-icon.svg'
import queueActiveIcon from './img/queue-icon-active.svg'
import volumeIcon from './img/volume-icon.svg'
import volumeOffIcon from './img/volume-off-icon.svg'
import playIcon from './img/play-icon.svg'

import api from '../../utils/api';
import notify from '../../utils/notification';
import {keys} from '../../constants';

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
        "<span class='plyr__progress'>",
        "<label for='seek{id}' class='plyr__sr-only'>Seek</label>",
        "<input id='seek{id}' class='plyr__progress--seek' type='range' min='0' max='100' step='0.1' value='0' data-plyr='seek'>",
        "<progress class='plyr__progress--played' max='100' value='0' role='presentation'></progress>",
        "<progress class='plyr__progress--buffer' max='100' value='0'>",
        "<span>0</span>% buffered",
        "</progress>",
        "<span class='plyr__tooltip'>00:00</span>",
        "</span>",
        "<button type='button' data-plyr='play'>",
        `<img src=${playIcon} alt=/>`,
        "<span class='plyr__sr-only'>Play</span>",
        "</button>",
        "<button type='button' data-plyr='pause'>",
        `<img src=${pauseIcon} alt=/>`,
        "<span class='plyr__sr-only'>Pause</span>",
        "</button>",
        "<button type='button' id='next-btn'>",
        `<img src=${nextIcon} alt=/>`,
        "<span class='plyr__sr-only'>Forward {seektime} secs</span>",
        "</button>",
        "<div class='volume-wrapper'>",
        "<button type='button' data-plyr='mute'>",
        // "<svg class='icon--muted'><use xlink:href='#plyr-muted'></use></svg>",
        `<img class='icon--muted' src=${volumeOffIcon} alt=/>`,
        `<img src=${volumeIcon} alt=/>`,
        "<span class='plyr__sr-only'>Toggle Mute</span>",
        "</button>",
        "<span class='plyr__volume'>",
        "<label for='volume{id}' class='plyr__sr-only'>Volume</label>",
        "<input id='volume{id}' class='plyr__volume--input' type='range' min='0' max='10' value='5' data-plyr='volume'>",
        "<progress class='plyr__volume--display' max='10' value='0' role='presentation'></progress>",
        "</span>",
        "</div>",
        "<button id='queue-toggle' class='player-queue' type='button' data-plyr='queue'>",
        `<img class="queue-active" src=${queueActiveIcon} alt='queue icon'/>`,
        `<img class="queue-default" src=${queueIcon} alt='queue icon'/>`,
        "<span class='plyr__sr-only'>Queue</span>",
        "</button>",
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

    let queueToogleElement = document.querySelector('#queue-toggle');

    queueToogleElement.addEventListener('click', (evt) => {
      if (this.props.playlistActive) {
        queueToogleElement.classList.remove('active');
        this.props.deactivatePlaylist();
      } else {
        queueToogleElement.classList.add('active');
        this.props.activatePlaylist();
      }
    })
  }

  handleKeyboardEvents(e) {
    if (e.target === document.body) {
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
        case keys.R:
          let existPrevious = this.props.prevSongs.length >= 2;
          if(this.audioElement.currentTime <= 5 && existPrevious) {
              this.props.playPrev();
              this.props.playNext();
          } else {
            this.audioElement.currentTime = 0;
          }
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
    }
  };

  componentWillReceiveProps(newProps) {
    if (!this.props.currentSong || this.props.currentSong.id !== newProps.currentSong.id) {
      // A new song is loaded
      api.fetchStreamURL(newProps.currentSong.stream_url)
        .then(url => {
          this.setState({...this.state, streamURL: url});
          notify('Playing now...', newProps.currentSong.title);
        });
      this.props.getSuggestions(newProps.currentSong.suggest_url);
      this.props.playedNext(newProps.currentSong)
    }
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
          </div>
        </div>

        <div className="player">
          <audio id='audio-player' ref={ref => this.audioElement = ref} src={this.state.streamURL} autoPlay={true}
                 controls={true} preload='auto'>
            Audio not supported!!
          </audio>
        </div>
      </div>
    )
  }
}
