import Primus from 'primus';
import http from 'http';
<<<<<<< HEAD
// import router from ('../bin/router.js'),
=======
>>>>>>> 6ef2cc705e12499ba93d00f41597a87e17e94710

let server = http.createServer((req,res) => {
  res.setHeader('Content-Type', 'text/html');
  require('fs').createReadStream(__dirname + '/../pub/index.html').pipe(res);
<<<<<<< HEAD
  require('fs').createReadStream(__dirname + '/../pub/show.html').pipe(res);
  res.render('/show')
=======
>>>>>>> 6ef2cc705e12499ba93d00f41597a87e17e94710
});

let primus = new Primus(server);

primus.on('connection', function connection(spark) {
  spark.on('data', function received(data) {
    primus.write(data);
  });
});

<<<<<<< HEAD


server.listen(8080, function () {
  console.log('Open http://localhost:8080 in your browser');
});

// server.use(router);
=======
server.listen(8080, function () {
  console.log('Open http://localhost:8080 in your browser');
});
>>>>>>> 6ef2cc705e12499ba93d00f41597a87e17e94710
