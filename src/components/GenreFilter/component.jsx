import React from 'react';
import PropTypes from 'prop-types';
import GenreFilterItem from '../GenreFilterItem';

import './genre-filter.scss';

const GenreFilter = ({ genres }) => (
  <div className="genre-filter">
    <h2 className="genre-filter__heading">Genres</h2>
    <ul>
      {genres &&
        genres.map(genre => <GenreFilterItem key={genre.id} genre={genre} />)}
    </ul>
  </div>
);

GenreFilter.propTypes = {
  genres: PropTypes.array.isRequired,
};

export default GenreFilter;
