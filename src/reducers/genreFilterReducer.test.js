import genreFilterReducer from './genreFilterReducer';
import initialState from './initialState';

describe('genreFilter reducer', () => {
  it('uses initialState if none is passed to the reducer', () => {
    const newState = genreFilterReducer();

    expect(newState).toEqual(initialState.genreFilter);
  });

  it('adds the clicked item to state if not already there', () => {
    const state = ['1', '2', '4'];
    const action = { type: 'CHECKBOX_CLICKED', id: '3' };
    const newState = genreFilterReducer(state, action);

    expect(newState).toEqual(['1','2','4','3']);
  });

  it('removes the clicked item to state if already there', () => {
    const state = ['1', '2', '4'];
    const action = { type: 'CHECKBOX_CLICKED', id: '1' };
    const newState = genreFilterReducer(state, action);

    expect(newState).toEqual(['2','4']);
  });
});
