import React from 'react';

import {searchStatus} from '../../../actions/searchActions';
import VideoCardListList from '../../../components/navigation/videoCard/list/videoCardListList';

export default class NavigationSearch extends React.Component {
  constructor(props) {
    super(props);
    this.query = null;
  }

  componentDidMount() {
    this.makeSearch(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.makeSearch(nextProps);
  }

  makeSearch(props) {
    const query = props.match.params.q;
    if (this.query === query) {
      return;
    }
    this.query = query;
    this.startSearch();
  }

  startSearch() {
    this.props.initSearch();
    this.props.search(this.query);
  }

  playSong(video) {
    this.props.playSong(video);
  }

  getHeadline() {
    if (this.props.searchStatus === searchStatus.searching) {
      return <span>Loading...</span>
    } else if (this.props.searchStatus === searchStatus.searched) {
      return <span>Found {this.props.numberResults} videos.</span>
    }
  }

  render() {
    return (
      <div className='container'>
        <h2>Search results for {this.query}</h2>
        <div className='text-center'>
          {this.getHeadline()}
        </div>
        {<VideoCardListList videos={this.props.videos} addToNowPlaying={this.props.addToNowPlaying}
                            playSong={this.props.playSong} />}
      </div>
    )
  }
}
