import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '0e2b6ed61f19930ae3b07f789a6c64d0';

export const getTrendsMovie = async () => {
  const { data } = await axios.get(`trending/all/day?api_key=${API_KEY}`);

  return data;
};

export const getSearchMovie = async query => {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}`
  );

  return data;
};

export const getMovieDetails = async id => {
  const { data } = await axios.get(
    `movie/${id}?api_key=${API_KEY}&language=en-US`
  );

  return data;
};

export const getMovieCredits = async id => {
  const { data } = await axios.get(
    `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const getMovieReviews = async id => {
  const { data } = await axios.get(
    `movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );

  return data;
};
