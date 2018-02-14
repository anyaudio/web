import React from 'react';

import {downloadVideo} from "../../../../utils/downloadFile";
import './static/css/videoCardList.css';

export default class VideoCardList extends React.Component {

  addToNowPlaying() {
    this.props.addToNowPlaying(this.props.video);
  }

  playSong() {
    this.props.playSong(this.props.video);
  }

  downloadSong() {
    downloadVideo(this.props.video);
  }

  render() {
    return (
      <div className='video-card-list row'>
        <div className={'video-card-list-data'}>
          <div className="video-thumb video-card-list-thumb" onClick={this.playSong.bind(this)}>
            <div className="play-btn">
              <svg width="23" height="34" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.7 33.574c-.88.66-1.594.297-1.594-.806V1.225C.106.12.816-.243 1.7.418l20.545 15.385c.88.659.883 1.725 0 2.387L1.7 33.574z" fill="#FFF" fillRule="evenodd" fillOpacity=".85" opacity=".951"/>
              </svg>
            </div>

            <img src={this.props.video.thumb} className='uk-border-circle video-card-list-thumb'
                 alt='IMG'/>

          </div>
          <div className='video-card-list-details col-xs-11 col-sm-11 col-md-10 col-lg-8'>
            <div className='video-card-list-time'>
              {this.props.video.length}
            </div>
            <div className='video-card-list-title max-line-2'>
              {this.props.video.title}
            </div>
            <div className='video-card-list-uploader'>
              {this.props.video.uploader}
            </div>
            <div className='video-card-list-views'>
              {this.props.video.views}
            </div>
          </div>
        </div>
        <div>
          <div className="more-option uk-inline">
            <button className="uk-icon-link" uk-icon="icon:more-vertical; ratio:0.8"></button>
            <div uk-dropdown="mode: click;pos: bottom-right">
              <ul className="uk-nav uk-dropdown-nav">
                <li><a href="#" name='plus' onClick={this.addToNowPlaying.bind(this)}>
                  <span className="uk-margin-small-right" uk-icon="icon:plus"></span>
                  Add To Queue</a></li>
                <li><a href="#" name='download' onClick={this.downloadSong.bind(this)}>
                  <span className="uk-margin-small-right" uk-icon="icon:download"></span>
                  Download</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
