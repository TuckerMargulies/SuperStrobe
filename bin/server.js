import Primus from 'primus';
import http from 'http';

var PORT = process.env.PORT || 8080

let server = http.createServer((req,res) => {
  res.setHeader('Content-Type', 'text/html');
console.log(res.URL)
switch( req.uri.pathname )
{
  case '/touch':
    require('fs').createReadStream(__dirname + '/../pub/touch.html').pipe(res);
    break;
  case '/control':
    require('fs').createReadStream(__dirname + '/../pub/control.html').pipe(res);
    break;
  default:
    require('fs').createReadStream(__dirname + '/../pub/index.html').pipe(res);
    break;
}
});


let primus = new Primus(server);

primus.on('connection', function connection(spark) {
  spark.on('data', function received(data) {
    primus.write(data);
  });
});


server.listen(PORT, function () {
  console.log('Open http://localhost:8080 in your browser');
});
