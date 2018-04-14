import angular from 'angular';
import home from './home/home.module';
import mining from './mining/mining.module';
import shared from './shared/shared.module';

angular.module('genresApp', [home, mining, shared]);
