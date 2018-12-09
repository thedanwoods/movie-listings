import arrayContainsArray from './arrayContainsArray';

const getVisibleMovies = (movies, genreFilter, ratingFilter) =>
  !movies.length
    ? []
    : movies
        .filter(
          movie =>
            // If no genre filter is applied, we return all genres rather than nothing
            !genreFilter.length ||
            arrayContainsArray(movie.genre_ids, genreFilter),
        )
        .filter(movie => movie.vote_average >= ratingFilter);

export default getVisibleMovies;
