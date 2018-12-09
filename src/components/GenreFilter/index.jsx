import { connect } from 'react-redux';
import GenreFilter from './component';
import getVisibleMovies from '../../utils/getVisibleMovies';

// Only show genres that are possible based on the current visible movies
export const mapStateToProps = state => {
  const visibleMovies = getVisibleMovies(
    state.movies,
    state.genreFilter,
    state.ratingFilter,
  );
  const visibleGenres = visibleMovies
    .map(movie => movie.genre_ids)
    .reduce((acc, cur) => [...acc, ...cur], []); // Flattens array
  return {
    genres: state.genres.filter(genre =>
      visibleGenres.includes(genre.id),
    ),
  };
};

export default connect(mapStateToProps)(GenreFilter);
