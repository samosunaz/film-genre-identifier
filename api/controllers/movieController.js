'use strict';
require('es6-promise').polyfill();
require('isomorphic-fetch');

// const url = "http://api.themoviedb.org/4/list/1?page=1&api_key=ed0abe5e1cc4ac92257db413fe507215&sort_by=title.asc"

exports.fetchMovie = async (req, res, next) => {

  const movieId = req.params.movieId
  const url = "https://api.themoviedb.org/3/movie/"+movieId+"?api_key=ed0abe5e1cc4ac92257db413fe507215&sort_by=title.asc"
  const response = {
    name,
    overview
  };

  fetch(url)
    .then(response => {
      response.json().then(data => {
        let movies = data.results.map((item) => {
          return {
            title: item.title,
            overview: item.overview
          };
        });
        res.json(dataResponse);
      });
    })
    .catch(err => {
      console.log(err)
    });
};
