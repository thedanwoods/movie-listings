import initialState from './initialState';

const genreFilterReducer = (state = initialState.ratingFilter, action = {}) => {
  switch (action.type) {
    case 'RATING_CLICKED': {
      return +action.rating;
    }
    default:
      return state;
  }
};

export default genreFilterReducer;
