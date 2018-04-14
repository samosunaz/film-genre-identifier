export default class MovieApiService {
  constructor($http, $q) {
    'ngInject';
    this.$http = $http;
    this.$q = $q;
    this.MOVIE_API_URL = 'https://api.themoviedb.org/3';
    this.API_KEY = '78fdf10d18cb397803b89d89d23b0d77';
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

  async getMoviesByGenre(genreId) {
    const response = await this.$http.get(
      `${this.MOVIE_API_URL}/genre/${genreId}/movies?api_key=${this.API_KEY}`,
    );
    return response;
  }
}
