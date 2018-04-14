import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMessages from 'angular-messages';
import ngMaterial from 'angular-material';
import uiRouter from '@uirouter/angularjs';
import routing from './core.routing';

import 'angular-material/angular-material.min.css';
const core = angular
  .module('app.core', [ngAnimate, ngAria, ngMessages, ngMaterial, uiRouter])
  .config(routing).name;

export default core;
