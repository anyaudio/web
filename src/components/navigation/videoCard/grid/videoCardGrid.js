import React from 'react';

import './static/css/videoCardGrid.css'

export default class VideoCardGrid extends React.Component {
  playSong() {
    this.props.playSong(this.props.video);
  }

  render() {
    return (
      <div className='col-xs-5 col-sm-5 col-md-2 col-lg-2 video-grid-card'>
        <img className='img-responsive' src={this.props.video.thumb} alt='Loading...'
             onClick={this.playSong.bind(this)}/>
        <div className='video-grid-details'>
          <div className='video-grid-title'>{this.props.video.title}</div>
          <div className='video-grid-uploader'>{this.props.video.uploader}</div>
          <div className='video-grid-views'>{this.props.video.views}</div>
        </div>
      </div>
    )
  }
}
