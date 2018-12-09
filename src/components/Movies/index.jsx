import { connect } from 'react-redux';
import Movies from './component';
import getVisibleMovies from '../../utils/getVisibleMovies';

export const mapStateToProps = state => ({
  movies: getVisibleMovies(state.movies, state.genreFilter, state.ratingFilter),
});
export default connect(mapStateToProps)(Movies);
