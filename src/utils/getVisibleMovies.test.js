import getVisibleMovies from './getVisibleMovies';

describe('getVisbleMovies', () => {
  const movies = [
    { genre_ids: [1, 2, 3], vote_average: 6 },
    { genre_ids: [2, 3, 4], vote_average: 6.5 },
    { genre_ids: [5], vote_average: 6.4 },
    { genre_ids: [1, 3, 5], vote_average: 7.1 },
    { genre_ids: [4, 5, 6], vote_average: 7 },
  ];

  it('returns all movies if no genre filter is applied', () => {
    const result = getVisibleMovies(movies, [], 0);
    expect(result).toEqual(movies);
  });

  it('returns only movies rated equal to or higher than the rating filter', () => {
    const result = getVisibleMovies(movies, [], 6.5);
    expect(result).toEqual([movies[1], movies[3], movies[4]]);
  });

  it('returns movies matching a single', () => {
    const result = getVisibleMovies(movies, [5], 0);
    expect(result).toEqual([movies[2], movies[3], movies[4]]);
  });

  it('returns movies matching a all genres', () => {
    const result = getVisibleMovies(movies, [2, 3], 0);
    expect(result).toEqual([movies[0], movies[1]]);
  });

  it('returns empty array if nothing matches genres', () => {
    const result = getVisibleMovies(movies, [1, 2, 5], 0);
    expect(result).toEqual([]);
  });

  it('filters on genres and ratings together', () => {
    const result = getVisibleMovies(movies, [3], 6.5);
    expect(result).toEqual([movies[1], movies[3]]);
  });
});
