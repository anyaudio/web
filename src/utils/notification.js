export default (title, body) => {
  Notification
    .requestPermission()
    .then(function() {
      let n = new Notification(title, {
        body: body,
        icon: '/favico.ico'
      });
      setTimeout(n.close.bind(n), 3000);
    });
}
