import getQueryString from './paramParser';

const host = 'http://anyaudio.in';

export default {
  search: (query) => {
    return new Promise((resolve, reject) => {
      fetch(host + '/api/v1/search?' + getQueryString({q: query}))
        .then(response => response.json().then(videos => resolve(videos)));
    })
  }
}
