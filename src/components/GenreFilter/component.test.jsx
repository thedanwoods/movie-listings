import React from 'react';
import { shallow } from 'enzyme';
import GenreFilter from './component';

const defaultProps = {
  genres: [{ id: 1 }, { id: 2 }],
};

describe('<GenreFilter /> component', () => {
  it('renders without errors', () => {
    const genreFilter = shallow(<GenreFilter {...defaultProps} />);

    expect(() => genreFilter).not.toThrow();
    expect(genreFilter.debug()).toMatchSnapshot();
  });
});
