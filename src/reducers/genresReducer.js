import initialState from './initialState';

const genresReducer = (state = initialState.genres, action = {}) => {
  switch (action.type) {
    case 'GENRES_RECEIVED': {
      return action.genres.genres;
    }
    default:
      return state;
  }
};

export default genresReducer;
