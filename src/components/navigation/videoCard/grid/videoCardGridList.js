import React from 'react';

import VideoCardGrid from './videoCardGrid';
import './static/css/videoCardGrid.css';

export default class VideoCardGridList extends React.Component {
  getPlaylist(name, videos) {
    return (
      <div className='playlist-complete' key={name}>
        <div className='playlist-title'>{name}</div>
        <div className='row'>
          {videos.map(video => <VideoCardGrid video={video} key={video.id} playSong={this.props.playSong}
                                              addToNowPlaying={this.props.addToNowPlaying}/>)}
        </div>
      </div>
    )
  }

  getPlaylists() {
    let keys = Object.keys(this.props.playlists);
    return keys.map(key => {
      return this.getPlaylist(key, this.props.playlists[key]);
    });
  }

  render() {
    if (Object.keys(this.props.playlists).length === 0) {
      return (
        <div>
          Loading...
        </div>
      )
    }
    return (
      <div>
        {this.getPlaylists()}
      </div>
    )
  }
}
