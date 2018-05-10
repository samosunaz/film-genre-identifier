import angular from 'angular';
import home from './home/home.module';
import mining from './mining/mining.module';
import shared from './shared/shared.module';
import './../../styles.scss';

angular.module('genresApp', [home, mining, shared]);
