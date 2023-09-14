const axios = require('axios');

const getCharById = (res, id) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
      const {
        name,
        gender,
        species,
        origin = origin.name,
        image,
        status,
      } = data;
      const character = {
        name,
        gender,
        species,
        origin,
        id,
        image,
        status,
      };
      res.writeHead(200, { 'Content-Type': 'Application/Json' });
      res.end(JSON.stringify(character));
    })
    .catch(reason => {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(reason.message);
    });
};

module.exports = getCharById;
