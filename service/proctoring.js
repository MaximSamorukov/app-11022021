const supervisor = new Supervisor({ url: 'https://demo.proctoring.online' });

supervisor.init({
  provider: 'jwt',
  token: 'token',
}).then(function () {
  return supervisor.start();
}).catch(function (err) {
  alert(err.toString());
  location.href = '/';
});