export default class MiningController {
  constructor($scope, movieApiService) {
    'ngInject';
    this.$scope = $scope;
    this.movieApiService = movieApiService;

    this.foundMovies = false;
    this.genre = '';
    this.genres = [];
    this.getMovieGenres();
    this.pages = [
      {
        number: 1,
        numberOfMovies: 20,
      },
      {
        number: 5,
        numberOfMovies: 100,
      },
      {
        number: 25,
        numberOfMovies: 500,
      },
      {
        number: 40,
        numberOfMovies: 800,
      },
    ];
    this.movies = [];
    this.selectedPage = this.pages[0];
    this.searchingForMovies = false;
  }

  clear() {
    this.movies = [];
    this.foundMovies = false;
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

  async mineDataFromGenre(pageNumber) {
    this.foundMovies = false;
    this.searchingForMovies = true;
    const apiResponse = await this.movieApiService
      .getMoviesByGenre(this.genre.id, pageNumber)
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
    return apiResponse;
  }

  async mine() {
    let results = [];
    console.log('Mining...');
    for (let index = this.selectedPage.number; index > 0; index--) {
      const result = await this.mineDataFromGenre(index)
        .then(response => {
          return response;
        })
        .catch(error => {})
        .finally(() => {});
      results = results.concat(result);
    }
    this.movies = results;
    this.$scope.$apply();
  }
}
