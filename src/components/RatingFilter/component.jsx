import React from 'react';
import PropTypes from 'prop-types';

import './rating-filter.scss';

// Create sequence 0 to 10 in 0.5 intervals
const sequence = Array.from(new Array(21).keys()).map(el => el / 2);

const displayRatingNumber = n =>
  `${n !== 0.5 ? Math.floor(n) : ''}${n === Math.floor(n) ? '' : '\u00BD'}`;

const RatingFilter = ({ current, onChange }) => (
  <div className="rating-filter">
    <h2 className="rating-filter__heading">Minimum rating</h2>
    <select
      id="rating-filter-dropdown"
      className="rating-filter__select"
      value={current}
      name="rating"
      onChange={e => onChange(e.target.value)}
    >
      {sequence.map(rating => (
        <option className="rating-filter__option" key={rating} value={rating}>
          {displayRatingNumber(rating)}
        </option>
      ))}
    </select>
  </div>
);

RatingFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  current: PropTypes.number.isRequired,
};

export default RatingFilter;
