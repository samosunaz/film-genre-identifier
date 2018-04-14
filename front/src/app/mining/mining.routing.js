import MiningController from './mining.controller';

export default function miningRouting($stateProvider) {
  'ngInject';
  const miningState = {
    name: 'mining',
    url: '/mine-data',
    controller: MiningController,
    controllerAs: 'vm',
    template: require('./mining.html'),
  };

  $stateProvider.state(miningState);
}
