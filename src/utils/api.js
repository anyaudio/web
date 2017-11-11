import getQueryString from './paramParser';

const host = 'https://anyaudio.in';

export default {
  search: (query) => {
    return new Promise((resolve, reject) => {
      fetch(host + '/api/v1/search?' + getQueryString({q: query}))
        .then(response => response.json().then(videos => resolve(videos)));
    })
  },
  fetchStreamURL(streamUrl) {
    return new Promise((resolve, reject) => {
      fetch(host + streamUrl)
        .then(response => response.json().then(data => resolve(host + data.url)))
    })
  }
}
