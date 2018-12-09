import genresReducer from './genresReducer';
import initialState from './initialState';

describe('genres reducer', () => {
  it('uses initialState if none is passed to the reducer', () => {
    const newState = genresReducer();

    expect(newState).toEqual(initialState.genres);
  });

  it('returns the genres on GENRES_RECEIVED', () => {
    const state = [{ id: 0, name: 'old genre' }];
    const genres = {
      genres: [
        {
          id: 1,
          name: 'action',
        },
        {
          id: 2,
          name: 'comedy',
        },
      ],
    };
    const action = { type: 'GENRES_RECEIVED', genres };
    const newState = genresReducer(state, action);

    expect(newState).toEqual(genres.genres);
  });
});
