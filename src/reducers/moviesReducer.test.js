import moviesReducer from './moviesReducer';
import initialState from './initialState';

describe('movies reducer', () => {
  it('uses initialState if none is passed to the reducer', () => {
    const newState = moviesReducer();

    expect(newState).toEqual(initialState.movies);
  });

  it('adds movies to an empty array on MOVIES_RECEIVED', () => {
    const state = [];
    const movies = {
      results: [{ id: 1, title: 'one' }, { id: 2, title: 'two' }],
    };
    const action = { type: 'MOVIES_RECEIVED', movies };
    const newState = moviesReducer(state, action);

    expect(newState).toEqual(movies.results);
  });

  // This functionality would be necessary if we were to make
  // multiple API calls, e.g. to get more pages
  it('adds movies to an already populated array on MOVIES_RECEIVED', () => {
    const state = [{ id: 1, title: 'one' }, { id: 3, title: 'three' }];
    const movies = {
      results: [{ id: 1, title: 'modifiedOne' }, { id: 2, title: 'two' }],
    };
    const expected = [
      { id: 3, title: 'three' },
      { id: 1, title: 'modifiedOne' },
      { id: 2, title: 'two' },
    ];
    const action = { type: 'MOVIES_RECEIVED', movies };
    const newState = moviesReducer(state, action);

    expect(newState).toEqual(expected);
  });
});
