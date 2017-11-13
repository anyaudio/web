import React from 'react';

import VideoCardGridList from '../videoCard/grid/videoCardGridList';

export default class NavigationHome extends React.Component {
  componentDidMount() {
    this.props.getPlaylists(10);
  }

  render() {
    return (
      <div className='container'>
        <VideoCardGridList playlists={this.props.playlists} playSong={this.props.playSong}/>
      </div>
    )
  }
}
