import { connect } from 'react-redux';
import GenreFilterItem from './component';
import checkboxClicked from '../../actions/checkboxClicked';

export const mapStateToProps = (state, ownProps) => ({
  checked: state.genreFilter.includes(ownProps.genre.id),
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(checkboxClicked(ownProps.genre.id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GenreFilterItem);
