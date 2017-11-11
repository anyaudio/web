import React from 'react';

export default class SideBar extends React.Component {
  render() {
    return (
      <div>
        {this.props.videos.map(video => <li key={video.id}>{video.title}</li>)}
      </div>
    )
  }
}
