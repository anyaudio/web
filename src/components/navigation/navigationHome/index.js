import React from 'react';

import VideoCardGridList from '../videoCard/grid/videoCardGridList';

export default class NavigationHome extends React.Component {
  componentDidMount() {
    this.props.getPlaylists(10);
  }

  render() {
    return (
      <div>
        <VideoCardGridList playlists={this.props.playlists} playSong={this.props.playSong}
                           addToNowPlaying={this.props.addToNowPlaying}/>
      </div>
    )
  }
}
