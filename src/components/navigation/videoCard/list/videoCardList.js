import React from 'react';
import FontAwesome from 'react-fontawesome';

import './static/css/videoCardList.css';

export default class VideoCardList extends React.Component {
  render() {
    return (
      <div className='video-card-list row'>
        <img src={this.props.video.thumb} className='img-responsive img-circle video-card-list-thumb' alt='IMG'/>
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
        <FontAwesome name='plus'/>
      </div>
    )
  }
}
