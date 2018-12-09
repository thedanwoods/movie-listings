import { mapStateToProps } from '.';

describe('<MovieCard /> container', () => {
  it('maps state to props', () => {
    const state = {
      genres: [
        { id: 1, name: 'Action' },
        { id: 2, name: 'Comedy' },
        { id: 4, name: 'Music' },
        { id: 7, name: 'Thriller' },
      ],
    };
    const ownProps = { movie: { genre_ids: [2, 7] } };
    const props = mapStateToProps(state, ownProps);
    expect(props).toEqual({ genres: ['Comedy', 'Thriller'] });
  });
});
