import { mapStateToProps, mapDispatchToProps } from '.';
import ratingClicked from '../../actions/ratingClicked';

describe('<RatingFilter /> component', () => {
  it('maps state to props', () => {
    const state = { ratingFilter: 7 };
    const props = mapStateToProps(state);
    expect(props).toEqual({ current: 7 });
  });
  it('maps dispatch to props', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).onChange('2');
    expect(dispatch.mock.calls[0][0]).toEqual(ratingClicked('2'));
  });
});
