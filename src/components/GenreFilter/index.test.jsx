import { mapStateToProps } from '.';

jest.mock('../../utils/getVisibleMovies', () =>
  jest
    .fn()
    .mockImplementation(() => [
      { genre_ids: [1, 3, 5] },
      { genre_ids: [1, 3, 7] },
      { genre_ids: [11] },
    ]),
);

describe('<GenreFilter /> container', () => {
  it('maps state to props', () => {
    const state = { movies: [], genres: [], genreFilter: [], ratingFilter: 1 };
    const props = mapStateToProps(state);
    expect(props).toEqual({ genres: [] });
  });

  it('correctly filters movies by selected genres', () => {
    const state = {
      movies: [],
      genres: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 11 },
        { id: 12 },
      ],
      genreFilter: [],
      ratingFilter: 1,
    };

    const expectedGenres = [
      { id: 1 },
      { id: 3 },
      { id: 5 },
      { id: 7 },
      { id: 11 },
    ];
    const props = mapStateToProps(state);
    expect(props.genres).toEqual(expectedGenres);
  });
});
