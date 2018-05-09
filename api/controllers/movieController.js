'use strict';
require('es6-promise').polyfill();
require('isomorphic-fetch');
const _ = require("lodash");
const PythonShell = require('python-shell');

let dummy = [{
    genero: 28,
    puntuaje: 2800
  },{
    genero: 12,
    puntuaje: 2400
  },{
    genero: 32,
    puntuaje: 1200
  }]

exports.fetchMovie = async (req, res) => {

  const movieId = req.params.movieId
  const url = "https://api.themoviedb.org/3/movie/"+movieId+"?api_key=ed0abe5e1cc4ac92257db413fe507215&sort_by=title.asc"
  let responseMovie = {
    name: "",
    overview: ""
  };

  fetch(url)
    .then(response => {

      if (response.status !== 200) {
        res.json({
          message: "error: " + response.status
        })
        return;
      }

      response.json()
        .then(data => {

          responseMovie.name = data.title
          responseMovie.overview = data.overview

          var options = {
            mode: 'text',
            pythonPath: '/usr/local/bin/python',
            pythonOptions: ['-u'], // get print results in real-time
            scriptPath: '/Users/scastro81/Documents/school/compiladores/film-genre-identifier/api/utils',
            args:
              [
                responseMovie.overview
              ]
          }

          PythonShell.run("classify.py", options, function (err, data) {
            let string = ""
            data.forEach(line => {
              string += line
            });
            console.log(string)
            res.status(200).json(JSON.parse(string))
          });
        });
    })
    .catch(function (err) {
      console.log('Fetch Error :-S', err);
    });
};
