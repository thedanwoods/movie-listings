import initialState from './initialState';

const testReducer = (state = initialState.tested, action = {}) => {
  switch (action.type) {
    case 'TEST_CLICKED':
      return !state;
    default:
      return state;
  }
};

export default testReducer;
