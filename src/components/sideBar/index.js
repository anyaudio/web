import React from 'react';

export default class SideBar extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.dispatchNext) {
      if (nextProps.videos.length > 0) {
        let video = nextProps.videos[0];
        this.props.removeVideo(video);
        this.props.playSong(video);
        this.props.playedNext();
      }
    }
  }

  render() {
    return (
      <div>
        <div>
          <b>Upcoming songs:</b>
          {this.props.videos.map(video => <li key={video.id}>{video.title}</li>)}
        </div>
        <div style={{marginTop: '10px'}}>
          <b>Suggestions:</b>
          {this.props.suggestedVideos.map(video => <li key={video.id}>{video.title}</li>)}
        </div>
      </div>
    )
  }
}
