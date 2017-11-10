import React from 'react';
import 'url-search-params-polyfill';

import {searchStatus} from "../../../actions/searchActions";

export default class NavigationSearch extends React.Component {
  constructor(props) {
    super(props);
    const params = new URLSearchParams(this.props.location.search);
    this.query = params.q;
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
    console.log(this.props);
    return (
      <div>
        <h2>Search results for {this.query}</h2>
        {this.getHeadline()}
        {this.props.videos.map(video => <li key={video.id}>{video.title}</li>)}
      </div>
    )
  }
}
