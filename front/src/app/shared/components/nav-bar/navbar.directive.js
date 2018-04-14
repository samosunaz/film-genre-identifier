import NavBarController from './navbar.controller';

export default function comNavBar() {
  const directive = {
    restrict: 'E',
    bindToController: true,
    controller: NavBarController,
    controllerAs: 'vm',
    scope: {},
    template: require('./navbar.directive.html'),
  };

  return directive;
}
