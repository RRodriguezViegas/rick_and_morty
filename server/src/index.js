var http = require('http');
var data = require('./utils/data.js');

http
  .createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    if (request.url.includes('/rickandmorty/character')) {
      let res = request.url.match(/er..+$/i);
      let ress = res[0].split('/');
      let resNumber = Number(ress[1]);
      if (resNumber) {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(
          JSON.stringify(data[data.findIndex(x => x.id === resNumber)])
        );
      }
    }
  })
  .listen(3001, 'localhost');
