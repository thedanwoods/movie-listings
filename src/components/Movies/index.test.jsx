import { mapStateToProps } from '.';

describe('<Movies /> container', () => {
  it('maps state to props without crashing', () => {
    const state = { movies: [], genreFilter: [], ratingFilter: 3 };
    const props = mapStateToProps(state);
    expect(props).toEqual({ movies: [] });
  });
});
