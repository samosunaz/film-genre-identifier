export default class HomeController {
  constructor($scope, $mdDialog, movieApiService) {
    'ngInject';
    this.movieId = '';
    this.movie = {};
    this.isSpinnerShowing = false;
    this.$scope = $scope;
    this.$mdDialog = $mdDialog;
    this.movieApiService = movieApiService;
  }

  async findById() {
    this.movie = {};
    this.isSpinnerShowing = true;
    this.movie = await this.movieApiService
      .findMovieById(this.movieId)
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .catch(error => {
        this.showAlertDialog();
      })
      .finally(() => {
        this.isSpinnerShowing = false;
      });
    this.$scope.$apply();
  }

  showAlertDialog() {
    this.$mdDialog.show(
      this.$mdDialog
        .alert()
        .parent(angular.element(document.body))
        .clickOutsideToClose(true)
        .title('Movie not found')
        .textContent('Check the movie ID.')
        .ariaLabel('Movie not found alert dialog')
        .ok('Ok')
        .targetEvent(null),
    );
  }
}
