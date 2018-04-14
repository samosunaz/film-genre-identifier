import angular from 'angular';
import core from '../config/core.module';
import shared from '../shared/shared.module';
import homeRouting from './home.routing';

const home = angular.module('app.home', [core, shared]).config(homeRouting)
  .name;

export default home;
