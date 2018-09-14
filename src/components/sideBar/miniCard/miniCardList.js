import React from 'react';

import MiniCard from "./miniCard";


class MiniCardList extends React.Component {

  state = {
    updatedSongList : false,
  }

  swapCard = (dragIndex, hoverIndex)  => {
    this.props.moveCard(dragIndex, hoverIndex);
    this.setState({updatedSongList : !this.state.updatedSongList});
  }

  render() {
    console.log(this.props.songs);
    return this.props.songs.map( (song, i) => {
      if (this.props.currentSong && song.id === this.props.currentSong.id) {
        return <MiniCard song={song} active={true} playSong={this.props.playSong}
                         addToNowPlaying={this.props.addToNowPlaying} key={song.id}
                         removeSong = {this.props.removeSong}
        />
      }
      return <MiniCard name={this.props.name} song={song} playSong={this.props.playSong} addToNowPlaying={this.props.addToNowPlaying}
                       key={song.id}
                       index={i}
                       removeSong = {this.props.removeSong}
                       moveCard = {this.swapCard}                       
      />
    });
  }
}

export default MiniCardList;
