import React from 'react';
import { shallow } from 'enzyme';
import Movies from './component';

const defaultProps = {
  movies: [
    {
      id: 1,
      popularity: 10,
    },
    {
      id: 2,
      popularity: 9,
    },
    {
      id: 3,
      popularity: 11,
    },
  ],
};

describe('<Movies /> component', () => {
  it('renders without errors', () => {
    const movies = shallow(<Movies {...defaultProps} />);

    expect(() => movies).not.toThrow();
    expect(movies.debug()).toMatchSnapshot();
  });

  it('displays none found message if empty movies array supplied', () => {
    const props = {
      movies: [],
    }
    const movies = shallow(<Movies {...props} />);

    expect(movies.find('.movies__none').exists()).toBe(true);
    expect(movies.debug()).toMatchSnapshot();
  });
});
