import React from 'react';

import './static/css/minicard.css';

export default class MiniCard extends React.Component {
  play() {
    this.props.playSong(this.props.song);
  }

  addToNowPlaying() {
    this.props.addToNowPlaying(this.props.song);
  }

  render() {

    const MAX_TITLE_LENGTH = 24;

    let videoTitle = this.props.song.title;

    if(videoTitle.length > MAX_TITLE_LENGTH) {
      videoTitle =  videoTitle.substring(0, MAX_TITLE_LENGTH)+'... ';
    }

    console.log(this.props.name);

    return (
      <div className='song-card-list uk-margin-small-bottom uk-flex'>
        <div className="uk-flex"  onClick={this.play.bind(this)}>
          <img src={this.props.song.thumb} className='uk-border-circle song-card-list-thumb'
               alt='IMG'/>
          <div className='song-card-list-details col-xs-11 col-sm-11 col-md-10 col-lg-8'>
            <div className='song-card-list-title text-color-grey87'>
              {this.props.active ? <b>{videoTitle}</b> : <div>{videoTitle}</div>}
            </div>
            <div className='song-card-list-channel font-size-11'>
              {this.props.active ? <b>{this.props.song.uploader}</b> : <div>{this.props.song.uploader}</div>}
            </div>
          </div>
        </div>
        <div className="add-to-upnext">
          {this.props.name === 'related'?<button name='plus' onClick={this.addToNowPlaying.bind(this)} className="uk-icon-link uk-icon" uk-icon="icon:plus;"/>:
            <button name='plus' className="uk-icon-link uk-icon" uk-icon="icon:close;"/>}
        </div>
      </div>
    )
  }
}
