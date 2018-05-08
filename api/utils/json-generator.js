const genres = require("./genres.json")
const fs = require('fs');

exports.hola = (genreUrl) => {

  let movies = [];

  return fetch(genreUrl)
    .then(response => {

      return response.json()
        .then(data => {
          res = data.results.map((item) => {
            return {
              title: item.original_title,
              overview: item.overview
            };
          });

          return res
        })
    })
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });

}

exports.genreNameFinder = (genre_id) => {

  let name = "";

  for (let i in genres.genres) {
    var item = genres.genres[i];
    if (item.id == genre_id) {
      name = item.name
    }
  }

  return name;
}

exports.saveToFile = async (jsonData, genreName) => {
  const content = JSON.stringify(jsonData);


  const name = genreName + ".json"
  const ext = __dirname + "/data/" + name

  fs.writeFile(ext.toLowerCase(), content, 'utf8', function(err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file " + ext + " was saved!");
  });
}
