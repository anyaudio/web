import React from 'react';

import MiniCardList from "./miniCard/miniCardList";

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
          <MiniCardList songs={this.props.prevSongs} currentSong={this.props.currentSong} playSong={this.props.playSong} addToNowPlaying={this.props.addToNowPlaying}/>
        </div>
        <hr/>
        <div>
          <b>Upcoming songs:</b>
          <MiniCardList songs={this.props.nextSongs} playSong={this.props.playSong} addToNowPlaying={this.props.addToNowPlaying}/>
        </div>
        <hr/>
        <div>
          <b>Suggestions:</b>
          <MiniCardList songs={this.props.suggestedSongs} playSong={this.props.playSong} addToNowPlaying={this.props.addToNowPlaying}/>
        </div>
      </div>
    )
  }
}
