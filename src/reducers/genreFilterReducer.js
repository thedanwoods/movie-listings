import initialState from './initialState';

const genreFilterReducer = (state = initialState.genreFilter, action = {}) => {
  switch (action.type) {
    case 'CHECKBOX_CLICKED': {
      let newState;
      if (state.includes(action.id)) {
        newState = state.filter(item => item !== action.id);
      } else {
        newState = [...state, action.id];
      }
      return newState;
    }
    default:
      return state;
  }
};

export default genreFilterReducer;
