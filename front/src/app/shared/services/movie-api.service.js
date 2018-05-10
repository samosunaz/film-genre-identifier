export default class MovieApiService {
  constructor($http, $q) {
    'ngInject';
    this.$http = $http;
    this.$q = $q;
    this.MOVIE_API_URL = 'https://api.themoviedb.org/3';
    this.API_URL = 'http://10.43.33.197:5002/api/movies';
    this.API_KEY = '';
  }

  async findMovieById(movieId) {
    const response = await this.$http.get(
      `${this.MOVIE_API_URL}/movie/${movieId}?api_key=${this.API_KEY}`,
    );
    return response;
  }

  async getGenres() {
    const response = await this.$http.get(
      `${this.MOVIE_API_URL}/genre/movie/list?api_key=${this.API_KEY}`,
    );
    return response;
  }

  async getMoviesByGenre(genreId, pageNumber) {
    const response = await this.$http.get(
      `${this.MOVIE_API_URL}/genre/${genreId}/movies?api_key=${
        this.API_KEY
      }&page=${pageNumber}`,
    );
    return response;
  }

  async callApi(movieId) {
    const response = await this.$http.get(`${this.API_URL}/${movieId}`);
    return response;
  }
}
