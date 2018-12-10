import initialState from './initialState';

const genreFilterReducer = (state = initialState.genreFilter, action = {}) => {
  switch (action.type) {
    case 'CHECKBOX_CLICKED': {
      return state.includes(action.id)
        ? state.filter(item => item !== action.id)
        : [...state, action.id];
    }
    default:
      return state;
  }
};

export default genreFilterReducer;
