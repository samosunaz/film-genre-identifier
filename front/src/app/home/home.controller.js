export default class HomeController {
  constructor($scope, movieApiService) {
    'ngInject';
    this.movieId = '';
    this.movie = {};
    this.movieApiService = movieApiService;
    this.$scope = $scope;
  }

  async findById() {
    this.movie = await this.movieApiService
      .findMovieById(this.movieId)
      .then(response => {
        return response.data;
      });
    console.log(this.movie);
    this.$scope.$apply();
  }
}
