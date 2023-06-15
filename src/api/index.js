import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'a542711b10b0d1e187ab79449890246f';

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error(error.toJSON());
  }
};

export const getSearchMoviesByQuery = async searchQuery => {
  try {
    const response = await axios.get(
      `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchQuery}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error.toJSON());
  }
};

export const getMovieDetails = async movieId => {
  try {
    const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}&language=en-US`);
    return response.data;
  } catch (error) {
    console.error(error.toJSON());
  }
};

export const getMovieCredits = async movieId => {
  try {
    const response = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
    return response.data.cast;
  } catch (error) {
    console.error(error.toJSON());
  }
};

export const getMovieReviews = async movieId => {
  try {
    const response = await axios.get(
      `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response.data.results;
  } catch (error) {
    console.error(error.toJSON());
  }
};
