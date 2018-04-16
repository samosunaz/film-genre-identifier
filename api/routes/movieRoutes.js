'use strict';
const express = require('express');
const router = require('express-promise-router')();
const controller = require('../controllers/movieController');

router
  .route('/test')
  .get(controller.test)

router
  .route('/')
  .get(controller.fetch)

module.exports = router;
