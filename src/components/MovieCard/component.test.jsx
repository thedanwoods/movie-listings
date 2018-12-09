import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from './component';

const defaultProps = {
  movie: { poster_path: '/abc', title: 'Mock title' },
  genres: [{ id: 1, name: 'Action' }],
};

describe('<MovieCard /> component', () => {
  it('renders without errors', () => {
    const movieCard = shallow(<MovieCard {...defaultProps} />);

    expect(() => movieCard).not.toThrow();
    expect(movieCard.debug()).toMatchSnapshot();
  });
});
