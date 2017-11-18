import React from 'react';

export default class SideBar extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.dispatchNext) {
      if (nextProps.nextSongs.length > 0) {
        let video = nextProps.nextSongs[0];
        this.props.removeSong(video);
        this.playSong(video);
      } else if (nextProps.suggestedSongs.length > 0) {
        let video = nextProps.suggestedSongs[0];
        this.playSong(video);
      }
    }
  }

  playSong(video) {
    this.props.playSong(video);
    this.props.playedNext(video);
  }

  render() {
    return (
      <div>
        <div>
          <b>Previous Songs:</b>
          {this.props.prevSongs.map(video => {
            if (this.props.currentSong && this.props.currentSong.id === video.id) {
              return <li key={video.id}><b>{video.title}</b></li>
            }
            return <li key={video.id}>{video.title}</li>
          })}
        </div>
        <hr/>
        <div>
          <b>Upcoming songs:</b>
          {this.props.nextSongs.map(video => <li key={video.id}>{video.title}</li>)}
        </div>
        <hr/>
        <div style={{marginTop: '10px'}}>
          <b>Suggestions:</b>
          {this.props.suggestedSongs.map(video => <li key={video.id}>{video.title}</li>)}
        </div>
      </div>
    )
  }
}
