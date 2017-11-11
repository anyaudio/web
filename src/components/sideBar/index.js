import React from 'react';

export default class SideBar extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.dispatchNext) {
      this.props.playedNext();
      if (this.props.videos.length > 0) {
        let video = this.props.videos[0];
        this.props.removeVideo(video);
        this.props.playSong(video);
      }
    }
  }

  render() {
    return (
      <div>
        {this.props.videos.map(video => <li key={video.id}>{video.title}</li>)}
      </div>
    )
  }
}
