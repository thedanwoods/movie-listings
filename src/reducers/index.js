import { combineReducers } from 'redux';
import movies from './moviesReducer';
import genres from './genresReducer';
import genreFilter from './genreFilterReducer';
import ratingFilter from './ratingFilterReducer';
import fetchStatus from './fetchStatusReducer';

export default combineReducers({
  movies,
  genres,
  genreFilter,
  ratingFilter,
  fetchStatus,
});
