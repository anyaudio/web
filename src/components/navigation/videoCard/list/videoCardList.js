import React from 'react';

export default class VideoCardList extends React.Component {
  render() {
    return (
      <div>
        {this.props.video.title}
      </div>
    )
  }
}
