import $ from 'jquery';

export default class HomeController {
  constructor($scope, $mdDialog, movieApiService) {
    'ngInject';
    this.movieId = '';
    this.movie = {};
    this.isSpinnerShowing = false;
    this.$scope = $scope;
    this.$mdDialog = $mdDialog;
    this.movieApiService = movieApiService;
    this.imgSrc = './../../../assets/movies.png';
    this.showChart = false;
  }

  async findById() {
    this.movie = {};
    this.showChart = false;
    this.isSpinnerShowing = true;
    this.movie = await this.movieApiService
      .findMovieById(this.movieId)
      .then(response => {
        this.callApi(this.movieId);
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

  async callApi(movieId) {
    let response = await this.movieApiService
      .callApi(movieId)
      .then(res => {
        console.log(res);
        this.labels = [];
        this.data = [];
        res.data['scores'].forEach(element => {
          this.labels.push(element['genre']);
          this.data.push(element['score']);
        });
        this.showChart = true;
        this.$scope.$apply();
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {});
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
