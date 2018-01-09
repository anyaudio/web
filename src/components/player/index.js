import React from 'react';
import plyr from 'plyr';

import 'plyr/dist/plyr.css';

import api from '../../utils/api';
import notify from '../../utils/notification';

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {streamURL: null};
    this.props.playNext()
  }

  componentDidMount() {

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

    let audioElement = document.getElementById('audio-player');
    if (!audioElement) {
      return;
    }
    audioElement.addEventListener('ended', (e) => {
      this.props.playNext();
    });
    audioElement.addEventListener('error', (e) => {
      console.log('ERROR: Error while playing audio ', e);
      this.props.playNext();
    });

    // Effects on keypress while active on body
    window.addEventListener('keydown', (e) => {
      if (e.target === document.body) {
        switch (e.keyCode) {
          case 32:  // Space
            if (audioElement.paused === false) {
              audioElement.pause();
            } else {
              audioElement.play();
            }
            e.preventDefault();
            break;
          case 39:  // Right arrow
            audioElement.currentTime += 10;
            e.preventDefault();
            break;
          case 37:  // Left arrow
            audioElement.currentTime -= 10;
            e.preventDefault();
            break;
          case 38:  // Up arrow
            audioElement.volume = audioElement.volume <= 0.9 ? audioElement.volume + 0.1 : 1;
            e.preventDefault();
            break;
          case 40:  // Down arrow
            audioElement.volume = audioElement.volume >= 0.1 ? audioElement.volume - 0.1 : 0;
            e.preventDefault();
            break;
          case 78:  // n => play next song
            this.props.playNext();
            e.preventDefault();
            break;
          case 70:  // f => activate search box input
            let searchElement = document.getElementById('search-input');
            if (searchElement) {
              searchElement.focus();
            }
            e.preventDefault();
            break;
          default:
            // Do nothing
        }
      }
    });

    // Next on button click
    let nextButton = document.getElementById('next-btn');
    if (nextButton) {
      nextButton.onclick = (e) => {
        this.props.playNext();
      }
    }
  }

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
      <div>
        <div style={{display: this.state.streamURL ? 'block' : 'none'}}>
          <audio id='audio-player' src={this.state.streamURL} autoPlay={true} controls={true} preload='auto'>
            Audio not supported!!
          </audio>
        </div>
        {this.props.currentSong && this.props.currentSong.title}
        <button onClick={this.props.playNext}>Next</button>
      </div>
    )
  }
}
