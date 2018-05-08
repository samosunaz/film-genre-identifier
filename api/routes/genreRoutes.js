'use strict';
const express = require('express');
const router = require('express-promise-router')();
const controller = require('../controllers/genreController');

router
  .route('/fetchMoviesByGenre/:genreId')
  .get(controller.fetchMoviesByGenre)

router
  .route('/test/:genreId')
  .get(controller.main)

module.exports = router;
