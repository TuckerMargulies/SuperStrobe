import Primus from 'primus';
import http from 'http';
// import router from ('../bin/router.js'),

let server = http.createServer((req,res) => {
  res.setHeader('Content-Type', 'text/html');
  require('fs').createReadStream(__dirname + '/../pub/index.html').pipe(res);
  require('fs').createReadStream(__dirname + '/../pub/show.html').pipe(res);
  res.render('/show')
});

let primus = new Primus(server);

primus.on('connection', function connection(spark) {
  spark.on('data', function received(data) {
    primus.write(data);
  });
});



server.listen(8080, function () {
  console.log('Open http://localhost:8080 in your browser');
});

// server.use(router);
