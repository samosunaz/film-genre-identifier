import angular from 'angular';
import core from '../config/core.module';
import shared from '../shared/shared.module';
import miningRouting from './mining.routing';

const mining = angular
  .module('app.mining', [core, shared])
  .config(miningRouting).name;

export default mining;
