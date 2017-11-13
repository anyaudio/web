import api, {host} from './api';

const download = (url) => {
  window.open(url);
};

export const downloadVideo = (video) => {
  api.getDownloadLink(video.get_url)
    .then(data => download(host + data.url));
};

export default download;
