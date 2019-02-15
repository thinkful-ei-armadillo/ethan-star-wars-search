const BASE_URL = 'https://swapi.co/api/';

const searchPeople = function (searchTerm) {

  if (typeof searchTerm !== 'string') {
    return Promise.reject(new Error('searchTerm must be a string'));
  }

  return fetch(`${BASE_URL}people/?search=${searchTerm}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error('IOU one descriptive error message');
      }

      return res.json();
    });
};

const searchFilms = function (searchTerm) {

  if (typeof searchTerm !== 'string') {
    return Promise.reject(new Error('searchTerm must be a string'));
  }

  return fetch(`${BASE_URL}films/?search=${searchTerm}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error('IOU one descriptive error message');
      }

      return res.json();
    });
};

const searchStarships = function (searchTerm) {

  if (typeof searchTerm !== 'string') {
    return Promise.reject(new Error('searchTerm must be a string'));
  }

  return fetch(`${BASE_URL}starships/?search=${searchTerm}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error('IOU one descriptive error message');
      }

      return res.json();
    });
};

const searchVehicles = function (searchTerm) {

  if (typeof searchTerm !== 'string') {
    return Promise.reject(new Error('searchTerm must be a string'));
  }

  return fetch(`${BASE_URL}vehicles/?search=${searchTerm}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error('IOU one descriptive error message');
      }

      return res.json();
    });
};

const searchSpecies = function (searchTerm) {

  if (typeof searchTerm !== 'string') {
    return Promise.reject(new Error('searchTerm must be a string'));
  }

  return fetch(`${BASE_URL}species/?search=${searchTerm}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error('IOU one descriptive error message');
      }

      return res.json();
    });
};

const searchPlanets = function (searchTerm) {

  if (typeof searchTerm !== 'string') {
    return Promise.reject(new Error('searchTerm must be a string'));
  }

  return fetch(`${BASE_URL}planets/?search=${searchTerm}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error('IOU one descriptive error message');
      }

      return res.json();
    });
};

export default {
  searchPeople,
  searchFilms,
  searchStarships,
  searchVehicles,
  searchSpecies,
  searchPlanets,
};
