import fetchStatusReducer from './fetchStatusReducer';
import initialState from './initialState';

describe('fetchStatus reducer', () => {
  it('uses initialState if none is passed to the reducer', () => {
    const newState = fetchStatusReducer();

    expect(newState).toEqual(initialState.fetchStatus);
  });

  it('returns loading status on FETCH_MOVIES_START', () => {
    const state = { fetchMovies: '' };
    const action = { type: 'FETCH_MOVIES_START' };
    const newState = fetchStatusReducer(state, action);

    expect(newState.fetchMovies).toEqual('LOADING');
  });

  it('returns error status on FETCH_MOVIES_ERROR', () => {
    const state = { fetchMovies: 'SOMETHING' };
    const action = { type: 'FETCH_MOVIES_ERROR' };
    const newState = fetchStatusReducer(state, action);

    expect(newState.fetchMovies).toEqual('ERROR');
  });

  it('returns success status on FETCH_MOVIES_SUCCESS', () => {
    const state = { fetchMovies: 'SOMETHING' };
    const action = { type: 'FETCH_MOVIES_SUCCESS' };
    const newState = fetchStatusReducer(state, action);

    expect(newState.fetchMovies).toEqual('SUCCESS');
  });
});
