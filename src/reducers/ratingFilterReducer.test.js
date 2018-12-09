import ratingFilterReducer from './ratingFilterReducer';
import initialState from './initialState';

describe('ratingFilter reducer', () => {
  it('uses initialState if none is passed to the reducer', () => {
    const newState = ratingFilterReducer();

    expect(newState).toEqual(initialState.ratingFilter);
  });

  it('returns the rating on RATING_CLICKED', () => {
    const state = 3;
    const action = { type: 'RATING_CLICKED', rating: 4 };
    const newState = ratingFilterReducer(state, action);

    expect(newState).toEqual(4);
  });
});
