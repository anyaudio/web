import React from 'react';

import './static/css/videoCardGrid.css'

export default class VideoCardGrid extends React.Component {
  constructor(props) {
    super(props);

    this.playSong = this.playSong.bind(this);
    this.addToNowPlaying = this.addToNowPlaying.bind(this);
  }

  playSong() {
    this.props.playSong(this.props.video);
  }

  addToNowPlaying() {
    this.props.addToNowPlaying(this.props.video);
  }

  render() {

    const MAX_TITLE_LENGTH = 33;

    let videoTitle = this.props.video.title;

    if (videoTitle.length > MAX_TITLE_LENGTH) {
      videoTitle = videoTitle.substring(0, MAX_TITLE_LENGTH) + '...';
    }

    return (
      <div className="uk-width-1-5@l uk-width-1-3@m uk-width-1-3@s uk-width-1-2 video-card-grid uk-margin-small-bottom">
        <div>
          <div className="video-thumb" onClick={this.playSong}>
            <div className="play-btn">
              <svg width="40" height="39" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" opacity=".951"><path d="M19.703.277C8.876.277.088 8.855.088 19.426c0 10.57 8.788 19.149 19.615 19.149 10.827 0 19.615-8.58 19.615-19.15C39.318 8.856 30.53.278 19.703.278z" fillOpacity=".75" fill="#FFF" /><path fillOpacity=".87" fill="#000" d="M17.249 26.973V11.879l10.307 7.547z" /></g></svg>
            </div>
            <img src={this.props.video.thumb} alt="" />
            <div className="thumb-overlay" />
          </div>

          <div className="video-meta">
            <div>
              <div className="video-title" onClick={this.playSong}>{videoTitle}</div>
              <div className="video-channel">{this.props.video.uploader}</div>
              <div className="video-views">{this.props.video.views}</div>
            </div>

            <div className="more-option uk-inline">
              <button
                className="uk-icon-link"
                uk-icon="icon:plus; ratio:0.8"
                onClick={this.addToNowPlaying}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
