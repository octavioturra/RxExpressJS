var Rx = require('rx');

var server = new (require('../lib/rxexpress').Server);

server.requests.subscribe(Rx.Observer.create(
  function (s) {
    console.dir(s);
    s.response.end('teste');
  },
  function (err) {
    console.log('Error: ' + err);
  },
  function () {
    console.log('Completed');
  }
));

server.listen(3000);
