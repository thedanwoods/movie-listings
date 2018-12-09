import initialState from './initialState';

const moviesReducer = (state = initialState.movies, action = {}) => {
  switch (action.type) {
    case 'MOVIES_RECEIVED': {
      // If a movie is already in state, we replace it with the movie received
      const newIds = action.movies.results.map(movie => movie.id);
      return [
        ...state.filter(movie => !newIds.includes(movie.id)),
        ...action.movies.results,
      ];
    }
    default:
      return state;
  }
};

export default moviesReducer;
