'use strict';
require('es6-promise').polyfill();
require('isomorphic-fetch');

const url = "http://api.themoviedb.org/4/list/1?page=1&api_key=ed0abe5e1cc4ac92257db413fe507215&sort_by=title.asc"

exports.fetch = async (req, res, next) => {

  const movieName = req.body.name

  fetch(url)
    .then(
      function(response) {

        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        response.json().then(function(data) {
          let movie;
          for (let i = 0; i < data.results.length; i++) {
            if(data.results[i].title == movieName){
              movie = data.results[i];
              break;
            }
          }
          res.json(movie)
        });

      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
};

exports.test = async (req, res, next) => {

  fetch(url)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        response.json().then(function(data) {

          console.log("length", data.results.length)
          const movies = data.results.map((item) => {
            return {
              title: item.title,
              overview: item.overview
            };
          });

          res.json(movies)
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });

};
