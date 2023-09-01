import axios from 'axios';

export default getCharById = function (res, id) {
  axios(`https://rickandmortyapi.com/api/character/${id}`).then(response => {
    let data = {
      id: id,
      name: response.data.namem,
      gender: response.data.gender,
      species: response.data.species,
      origin: response.data.origin,
      image: response.data.image,
      status: response.data.status,
    };
    res;
  });
};
