import React from 'react';
import PropTypes from 'prop-types';

import './genre-filter-item.scss';

const GenreFilterItem = ({ genre, onClick, checked }) => (
  <li className="genre-filter-item">
    <label
      className="genre-filter-item__checkbox"
      htmlFor={`genre-filter-${genre.name}`}
    >
      <input
        type="checkbox"
        id={`genre-filter-${genre.name}`}
        name={genre.name}
        onChange={onClick}
        checked={checked}
      />
      <div className="genre-filter-item__text">{genre.name}</div>
    </label>
  </li>
);

GenreFilterItem.propTypes = {
  genre: PropTypes.object.isRequired,
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GenreFilterItem;
