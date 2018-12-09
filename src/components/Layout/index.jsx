import { connect } from 'react-redux';
import Layout from './component';
import getMovies from '../../actions/getMovies';

export const mapStateToProps = state => ({
  loadStatus: state.fetchStatus.fetchMovies,
});

export const mapDispatchToProps = dispatch => ({
  getMovies: () => {
    dispatch(getMovies());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
