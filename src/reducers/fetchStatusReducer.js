import initialState from './initialState';

const fetchStatusReducer = (state = initialState.fetchStatus, action = {}) => {
  switch (action.type) {
    case 'FETCH_MOVIES_START':
      return {
        ...state,
        fetchMovies: 'LOADING',
      };
    case 'FETCH_MOVIES_ERROR':
      return {
        ...state,
        fetchMovies: 'ERROR',
      };
    case 'FETCH_MOVIES_SUCCESS':
      return {
        ...state,
        fetchMovies: 'SUCCESS',
      };
    default:
      return state;
  }
};

export default fetchStatusReducer;
