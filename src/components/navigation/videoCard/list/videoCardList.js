import React from 'react';
import FontAwesome from 'react-fontawesome';

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
        <img src={this.props.video.thumb} className='img-responsive img-circle video-card-list-thumb'
             alt='IMG' onClick={this.playSong.bind(this)}/>
        <div className='video-card-list-details col-xs-11 col-sm-11 col-md-10 col-lg-8'>
          <div className='video-card-list-time'>
            {this.props.video.length}
          </div>
          <div className='video-card-list-title'>
            {this.props.video.title}
          </div>
          <div className='video-card-list-uploader'>
            {this.props.video.uploader}
          </div>
          <div className='video-card-list-views'>
            {this.props.video.views}
          </div>
        </div>
        <FontAwesome name='download' onClick={this.downloadSong.bind(this)}/>
        <FontAwesome name='plus' onClick={this.addToNowPlaying.bind(this)}/>
      </div>
    )
  }
}
