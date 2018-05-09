'use strict';
const utils = require("../utils/json-generator")
const PythonShell = require('python-shell');

require('es6-promise').polyfill();
require('isomorphic-fetch');

exports.main = async (req, res, next) => {

  const genreId = req.params.genreId
  let genreUrl;
  let dataResponse = {
    genreCode: req.params.genreId,
    genreName: utils.genreNameFinder(req.params.genreId),
    movies: []
  }

  let i = 1;
  let x = setInterval(async ()=>{
    let genreUrl = "https://api.themoviedb.org/3/genre/" + genreId + "/movies?api_key=ed0abe5e1cc4ac92257db413fe507215&language=en-US&include_adult=true&sort_by=created_at.asc&page=" + i
    const response = await utils.hola(genreUrl)
    dataResponse.movies = dataResponse.movies.concat(response);
    if (i >= 100) {
      clearInterval(x)
      console.log(dataResponse.movies)
      console.log(dataResponse.movies.length)
      utils.saveToFile(dataResponse, utils.genreNameFinder(genreId))
    }
    i++;
  }, 250)
}


exports.fetchMoviesByGenre = async (req, res, next) => {

  const genreId = req.params.genreId
  const genreUrl = "https://api.themoviedb.org/3/genre/" + genreId + "/movies?api_key=ed0abe5e1cc4ac92257db413fe507215&language=en-US&include_adult=true&sort_by=created_at.asc&page=6"

  let dataResponse = {
    genreCode: req.params.genreId,
    genreName: utils.genreNameFinder(req.params.genreId),
    movies: []
  }

  fetch(genreUrl)
    .then(response => {

      if (response.status !== 200) {
        res.json({
          message: "error: " + response.status
        })
        return;
      }

      response.json()
        .then(data => {
          const movies = data.results.map((item) => {
            return {
              title: item.title,
              overview: item.overview
            };
          });

          for (var i in movies) {
            var item = movies[i];
            dataResponse.movies.push({
              "title": item.title,
              "overview": item.overview
            });
          }

          res.json(dataResponse);

          utils.saveToFile(dataResponse, utils.genreNameFinder(req.params.genreId))
        });
    })
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
}

exports.pyDictionary = async (req, res, next) => {

  var options = {
    mode: 'text',
    pythonPath: '/usr/local/bin/python',
    pythonOptions: ['-u'],
    scriptPath: '/Users/scastro81/Documents/school/compiladores/film-genre-identifier/api/controllers'
  };

  PythonShell.run("helloWorld.py", options, function (err, data) {
      if (err) res.send(err);
    res.send(data.toString())
  });

}
