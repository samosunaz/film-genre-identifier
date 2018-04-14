export default class NavBarController {
  constructor($transitions) {
    'ngInject';
    $transitions.onSuccess({}, trans => {
      this.currentNavItem = trans.$to().name;
    });
  }
}
