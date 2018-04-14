export default class MovieApiService {
  constructor($http, $q) {
    'ngInject';
    this.$http = $http;
    this.$q = $q;
    this.MOVIE_API_URL = 'https://api.themoviedb.org/3';
    this.API_KEY = '78fdf10d18cb397803b89d89d23b0d77';
  }

  successCallback(response) {
    console.log(response);
    return response;
  }
  errorCallback(error) {
    console.log(error);
    return this.$q.reject(error);
  }

  async findMovieById(movieId) {
    const response = await this.$http.get(
      `${this.MOVIE_API_URL}/movie/${movieId}?api_key=${this.API_KEY}`,
    );
    return response;
  }
}
