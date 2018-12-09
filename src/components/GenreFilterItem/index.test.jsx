import { mapStateToProps, mapDispatchToProps } from '.';
import checkboxClicked from '../../actions/checkboxClicked';

describe('<GenreFilterItem /> container', () => {
  it('maps state to props', () => {
    const state = { genreFilter: [1, 4, 8] };
    const ownProps = { genre: { id: 8 } };
    const props = mapStateToProps(state, ownProps);
    expect(props).toEqual({ checked: true });
  });
  it('maps dispatch to props', () => {
    const dispatch = jest.fn();
    const ownProps = { genre: { id: 42 } };
    mapDispatchToProps(dispatch, ownProps).onClick();
    expect(dispatch.mock.calls[0][0]).toEqual(checkboxClicked(42));
  });
});
