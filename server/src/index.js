const http = require('http');
const PORT = 3001;
const getCharById = require('./controllers/getCharById');

http
  .createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req;
    if (url.includes('/rickandmorty/character')) {
      const id = Number(url.split('/').pop());
      getCharById(res, id);
    } else {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Route not found' }));
    }
  })
  .listen(PORT, () => {
    console.log(`Server running on port ${PORT} :o`);
  });
