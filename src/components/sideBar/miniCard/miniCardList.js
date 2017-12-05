import React from 'react';

import MiniCard from "./miniCard";

export default class MiniCardList extends React.Component {
  render() {
    return this.props.songs.map(song => {
      if (this.props.currentSong && song.id === this.props.currentSong.id) {
        return <MiniCard song={song} active={true} playSong={this.props.playSong}
                         addToNowPlaying={this.props.addToNowPlaying} key={song.id}/>
      }
      return <MiniCard name={this.props.name} song={song} playSong={this.props.playSong} addToNowPlaying={this.props.addToNowPlaying}
                       key={song.id}/>
    });
  }
}
