export default function routing($locationProvider, $urlRouterProvider) {
  'ngInject';
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}
