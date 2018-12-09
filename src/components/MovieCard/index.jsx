import { connect } from 'react-redux';
import MovieCard from './component';

export const mapStateToProps = (state, ownProps) => ({
  genres: state.genres
    .filter(genre => ownProps.movie.genre_ids.includes(genre.id))
    .map(genre => genre.name),
});

export default connect(mapStateToProps)(MovieCard);
