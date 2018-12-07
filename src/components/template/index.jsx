import { connect } from 'react-redux';
import TemplateComponent from './component';
import testAction from '../../actions/testAction';

export const mapStateToProps = state => ({ tested: state.tested });

export const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(testAction());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TemplateComponent);
