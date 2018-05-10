export default function routing(
  $locationProvider,
  $urlRouterProvider,
  ChartJsProvider,
) {
  'ngInject';
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  ChartJsProvider.setOptions({
    global: {
      colors: ['#3F51B5'],
      defaultFontColor: '#555555',
      defaultFontFamily: 'Roboto',
      defaultFontSize: 13,
    },
  });
}
