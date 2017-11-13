export default (title) => {
  Notification
    .requestPermission()
    .then(function() {
      let n = new Notification(title);
      setTimeout(n.close.bind(n), 2000);
    });
}
