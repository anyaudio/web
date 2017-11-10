const host = 'http://anyaudio.in';

// https://github.com/github/fetch/issues/256#issuecomment-271870897
function getQueryString(params) {
  return Object
    .keys(params)
    .map(k => {
      if (Array.isArray(params[k])) {
        return params[k]
          .map(val => `${encodeURIComponent(k)}[]=${encodeURIComponent(val)}`)
          .join('&')
      }

      return `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`
    })
    .join('&')
}

export default {
  search: (query) => {
    return new Promise((resolve, reject) => {
      fetch(host + '/api/v1/search?' + getQueryString({q: query}))
        .then(response => response.json().then(videos => resolve(videos)));
    })
  }
}
