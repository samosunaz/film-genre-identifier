import angular from 'angular';
import core from '../config/core.module';

import comNavBar from './components/nav-bar/navbar.directive';
import movieApiService from './services/movie-api.service';

const shared = angular
  .module('app.shared', [core])
  .directive('comNavBar', comNavBar)
  .service('movieApiService', movieApiService).name;

export default shared;
