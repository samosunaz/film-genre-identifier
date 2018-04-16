'use strict';
const express = require('express');
const router = require('express-promise-router')();
const controller = require('../controllers/genreController');

router
  .route('/test')
  .get(controller.test)

router
  .route('/')
  .get(controller.genres)

module.exports = router;
