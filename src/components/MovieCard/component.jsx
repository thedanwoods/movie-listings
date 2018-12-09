import React from 'react';
import PropTypes from 'prop-types';

import './movie-card.scss';

const MovieCard = ({ movie, genres }) => (
  <div className="movie-card">
    <div className="movie-card__poster-container">
      <img
        className="movie-card__poster"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`${movie.title} poster`}
      />
    </div>
    <section className="movie-card__info">
      <h1 className="movie-card__title">{movie.title}</h1>
      <p className="movie-card__genres">
        {genres.length && genres.join(', ')}
      </p>
    </section>
  </div>
);

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  genres: PropTypes.array.isRequired,
};

export default MovieCard;
