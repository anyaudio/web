import React from 'react';
import FontAwesome from 'react-fontawesome';

import './static/css/minicard.css';

export default class MiniCard extends React.Component {
  play() {
    this.props.playSong(this.props.song);
  }

  addToNowPlaying() {
    this.props.addToNowPlaying(this.props.song);
  }

  render() {
    return (
      <div className='song-card-list row'>
        <img src={this.props.song.thumb} className='img-responsive img-circle song-card-list-thumb'
             alt='IMG' onClick={this.play.bind(this)}/>
        <div className='song-card-list-details col-xs-11 col-sm-11 col-md-10 col-lg-8'>
          <div className='song-card-list-time'>
            {this.props.song.length}
          </div>
          <div className='song-card-list-title'>
            {this.props.active ? <b>{this.props.song.title}</b> : <p>{this.props.song.title}</p>}
          </div>
        </div>
        <FontAwesome name='plus' onClick={this.addToNowPlaying.bind(this)}/>
      </div>
    )
  }
}
