import { mapStateToProps, mapDispatchToProps } from '.';

jest.mock('../../actions/getMovies');

describe('<Layout /> container', () => {
  it('maps state to props', () => {
    const state = { fetchStatus: { fetchMovies: 'TEST' } };
    const props = mapStateToProps(state);
    expect(props).toEqual({ loadStatus: 'TEST' });
  });
  it('maps dispatch to props', () => {
    const dispatch = jest.fn();
    const result = mapDispatchToProps(dispatch);
    expect(dispatch).not.toHaveBeenCalled();
    result.getMovies();
    expect(dispatch).toHaveBeenCalled();
  });
});
