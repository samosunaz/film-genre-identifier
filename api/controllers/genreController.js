'use strict';

const url = "//api.themoviedb.org/4/list/1?page=1&api_key=ed0abe5e1cc4ac92257db413fe507215&sort_by=title.asc"

exports.genres = async (req, res, next) => {
  res.json('si sirvo test');
};

exports.test = async (req, res, next) => {
  res.json('si sirvo');
};
