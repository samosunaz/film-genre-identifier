import angular from 'angular';
import core from '../config/core.module';
import homeRouting from './home.routing';

const home = angular.module('app.home', [core]).config(homeRouting).name;

export default home;
