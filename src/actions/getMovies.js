/* global fetch */
// TODO In the real world we wouldn't hard code this
const apiKey = 'f94a91209b8b99b37d7b9e3780b888fd';

const fetchMovies = () => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
  return fetch(url).then(async response => {
    const json = await response.json();
    return json;
  });
};

const fetchGenres = () => {
  const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;
  return fetch(url).then(async response => {
    const json = await response.json();
    return json;
  });
};

const getMovies = () => async dispatch => {
  dispatch({ type: 'FETCH_MOVIES_START' });
  Promise.all([
    fetchMovies().then(movies => dispatch({ type: 'MOVIES_RECEIVED', movies })),
    fetchGenres().then(genres => dispatch({ type: 'GENRES_RECEIVED', genres })),
  ])
    .then(() => {
      dispatch({ type: 'FETCH_MOVIES_SUCCESS' });
    })
    .catch(() => {
      dispatch({ type: 'FETCH_MOVIES_ERROR' });
    });
};

export default getMovies;
