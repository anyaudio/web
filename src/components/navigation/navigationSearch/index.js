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

  getHeadline() {
    if (this.props.searchStatus === searchStatus.searching) {
      return <div>Loading...</div>
    } else if (this.props.searchStatus === searchStatus.searched) {
      return <div>Found {this.props.numberResults} videos.</div>
    }
  }

  render() {
    return (
      <div>
        <h2>Search results for {this.query}</h2>
        {this.getHeadline()}
        {<VideoCardListList videos={this.props.videos}/>}
      </div>
    )
  }
}
