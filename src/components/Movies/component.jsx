import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard';

import './movies.scss';

const byPopularityDescending = (a, b) => b.popularity - a.popularity;

const Movies = ({ movies }) => (
  <>
    {movies.length > 0 &&
      movies
        .sort(byPopularityDescending)
        .map(movie => <MovieCard key={movie.id} movie={movie} />)}
    {movies.length === 0 && (
      <div className="movies__none">
        No matching movies found.
      </div>
    )}
  </>
);

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Movies;
