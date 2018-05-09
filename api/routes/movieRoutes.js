'use strict';
const express = require('express');
const router = require('express-promise-router')();
const controller = require('../controllers/movieController');

router
  .route('/:movieId')
  .get(controller.fetchMovie)

module.exports = router;
