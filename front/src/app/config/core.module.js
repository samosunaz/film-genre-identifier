import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMessages from 'angular-messages';
import ngMaterial from 'angular-material';
import uiRouter from '@uirouter/angularjs';
import routing from './core.routing';

import 'angular-material/angular-material.min.css';
import MovieApiService from './movie-api.service';

const core = angular
  .module('app.core', [ngAnimate, ngAria, ngMessages, ngMaterial, uiRouter])
  .config(routing)
  .service('movieApiService', MovieApiService).name;

export default core;
