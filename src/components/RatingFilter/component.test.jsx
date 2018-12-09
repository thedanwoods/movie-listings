import React from 'react';
import { shallow } from 'enzyme';
import RatingFilter from './component';

const mockChangeHandler = jest.fn();

const defaultProps = {
  current: 5.5,
  onChange: mockChangeHandler,
};

describe('<RatingFilter /> component', () => {
  it('renders without errors', () => {
    const ratingFilter = shallow(<RatingFilter {...defaultProps} />);

    expect(() => ratingFilter).not.toThrow();
    expect(ratingFilter.debug()).toMatchSnapshot();
  });

  it('calls onChange event handler on select change', () => {
    const ratingFilter = shallow(<RatingFilter {...defaultProps} />);
    expect(mockChangeHandler).not.toHaveBeenCalled();
    ratingFilter.find('#rating-filter-dropdown').simulate('change', { target: { value: '1' } });
    expect(mockChangeHandler).toHaveBeenCalled();
  })
});
