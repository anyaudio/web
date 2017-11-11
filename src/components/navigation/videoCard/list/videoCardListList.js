import React from 'react';

import VideoCardList from './videoCardList';

export default class VideoCardListList extends React.Component {
  render() {
    return (
      <div>
        {this.props.videos && this.props.videos.map(video => <VideoCardList video={video} key={video.id} />)}
      </div>
    )
  }
}
