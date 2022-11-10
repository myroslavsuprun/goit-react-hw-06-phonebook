export class TMDBAPI {
  static #BASE_URL = 'https://api.themoviedb.org/3/';
  static #API_KEY = 'a53024f85571880eb7cb132a04dec362';

  static #TRENDING_OPTIONS = {
    media_type: 'movie',
    time_window: 'day',
  };

  static #FETCH_TYPE = {
    trending: 'trending',
    bySearch: 'bySearch',
    byId: 'byId',
    cast: 'cast',
    reviews: 'reviews',
  };

  static #BY_SEARCH_OPTIONS = {
    searchQuery: null,
  };

  static #BY_ID_OPTIONS = {
    id: null,
  };

  static PATH_TO_POSTER = 'https://image.tmdb.org/t/p/w500/';

  static async getTrendingMovies() {
    const { trending } = this.#FETCH_TYPE;

    const movies = await this.#fetchMovies(trending);

    return movies.results;
  }

  static async getMoviesBySearch(searchQuery) {
    this.#BY_SEARCH_OPTIONS.searchQuery = searchQuery;
    const { bySearch } = this.#FETCH_TYPE;

    const movies = await this.#fetchMovies(bySearch);

    return movies.results;
  }

  static async getMovieById(id) {
    this.#BY_ID_OPTIONS.id = id;
    const { byId } = this.#FETCH_TYPE;

    const movie = await this.#fetchMovies(byId);

    return movie;
  }

  static async getMovieCast(id) {
    this.#BY_ID_OPTIONS.id = id;
    const { cast } = this.#FETCH_TYPE;

    const castResponse = await this.#fetchMovies(cast);
    return castResponse.cast;
  }

  static async getMovieReviews(id) {
    this.#BY_ID_OPTIONS.id = id;
    const { reviews } = this.#FETCH_TYPE;

    const reviewsResponse = await this.#fetchMovies(reviews);

    return reviewsResponse.results;
  }

  static async #fetchMovies(type) {
    const BASE_URL = this.#BASE_URL;
    const API_KEY = this.#API_KEY;
    const { trending, bySearch, byId, cast, reviews } = this.#FETCH_TYPE;

    let fetchedMovies = null;
    let { id } = this.#BY_ID_OPTIONS;

    switch (type) {
      case trending:
        const { media_type, time_window } = this.#TRENDING_OPTIONS;

        // prettier-ignore
        fetchedMovies = await fetch(`${BASE_URL}trending/${media_type}/${time_window}?api_key=${API_KEY}`);
        break;

      case bySearch:
        const { searchQuery } = this.#BY_SEARCH_OPTIONS;

        // prettier-ignore
        fetchedMovies = await fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}`);
        break;

      case byId:
        // prettier-ignore
        fetchedMovies = await fetch(`${BASE_URL}movie/${Number(id)}?api_key=${API_KEY}`);
        break;

      case cast:
        // prettier-ignore
        fetchedMovies = await fetch(`${BASE_URL}movie/${Number(id)}/credits?api_key=${API_KEY}`);
        break;

      case reviews:
        // prettier-ignore
        fetchedMovies = await fetch(`${BASE_URL}movie/${Number(id)}/reviews?api_key=${API_KEY}`);
        break;

      default:
        return;
    }
    const fetchedMoviesJson = await fetchedMovies.json();
    return fetchedMoviesJson;
  }
}
