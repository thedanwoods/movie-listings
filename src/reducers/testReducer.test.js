import testReducer from './testReducer';
import initialState from './initialState';

describe('Test reducer', () => {
  it('uses initialState if none is passed to the reducer', () => {
    const newState = testReducer();

    expect(newState).toEqual(initialState.tested);
  });

  it('inverts state on TEST_CLICKED', () => {
    const state = false;
    const action = { type: 'TEST_CLICKED' };
    const newState = testReducer(state, action);

    expect(newState).toEqual(true);
  });
});
