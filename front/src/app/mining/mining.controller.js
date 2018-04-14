export default class MiningController {
  constructor($scope, movieApiService) {
    'ngInject';
    this.$scope = $scope;
    this.movieApiService = movieApiService;

    this.foundMovies = false;
    this.genres = [];
    this.genre = '';
    this.getMovieGenres();
    this.searchingForMovies = false;
  }

  async getMovieGenres() {
    this.genres = await this.movieApiService
      .getGenres()
      .then(response => {
        console.log(response);
        return response.data.genres;
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {});
    this.$scope.$apply();
  }

  async mineDataFromGenre() {
    this.foundMovies = false;
    this.searchingForMovies = true;
    this.movies = await this.movieApiService
      .getMoviesByGenre(this.genre.id)
      .then(response => {
        this.foundMovies = true;
        console.log(response);
        return response.data.results;
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        this.searchingForMovies = false;
      });
    this.$scope.$apply();
  }
}
