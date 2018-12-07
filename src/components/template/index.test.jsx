import { mapStateToProps, mapDispatchToProps } from '.';
import testAction from '../../actions/testAction';

describe('<Template /> component', () => {
  it('maps state to props', () => {
    const state = { tested: true };
    const props = mapStateToProps(state);
    expect(props).toEqual({ tested: true });
  });
  it('maps dispatch to props', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).onClick();
    expect(dispatch.mock.calls[0][0]).toEqual(testAction());
  });
});
