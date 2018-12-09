import React from 'react';
import { shallow } from 'enzyme';
import GenreFilterItem from './component';

const defaultProps = {
  genre: { id: 1, name: 'Action' },
  onClick: jest.fn(),
  checked: false,
};

describe('<GenreFilterItem /> component', () => {
  it('renders without errors', () => {
    const genreFilterItem = shallow(<GenreFilterItem {...defaultProps} />);

    expect(() => genreFilterItem).not.toThrow();
    expect(genreFilterItem.debug()).toMatchSnapshot();
  });
});
