import { connect } from 'react-redux';
import RatingFilter from './component';
import ratingClicked from '../../actions/ratingClicked';

export const mapStateToProps = state => ({ current: state.ratingFilter });

export const mapDispatchToProps = dispatch => ({
  onChange: rating => {
    dispatch(ratingClicked(rating));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RatingFilter);
