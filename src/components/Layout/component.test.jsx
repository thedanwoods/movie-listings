/*
 Using mount rather than shallow as it is not (yet)
 possible to shallow render components with React Hooks
 https://github.com/facebook/react/issues/14091
*/

import React from 'react';
import { mount } from 'enzyme';
import Layout from './component';

jest.mock('react-spinkit');
jest.mock('../Movies');
jest.mock('../GenreFilter');
jest.mock('../RatingFilter');

const getMoviesMock = jest.fn();

const defaultProps = {
  loadStatus: 'SUCCESS',
  getMovies: getMoviesMock,
};

describe('<Layout /> component', () => {
  it('renders without errors', () => {
    const layout = mount(<Layout {...defaultProps} />);

    expect(() => layout).not.toThrow();
    expect(layout.debug()).toMatchSnapshot();
  });

  it('displays an error if loadStatus is "ERROR"', () => {
    const props = {
      ...defaultProps,
      loadStatus: 'ERROR',
    };
    const layout = mount(<Layout {...props} />);
    expect(layout.find('.layout__error').exists()).toBe(true);
    expect(layout.debug()).toMatchSnapshot();
  });

  it('displays a spinner if loadStatus is "LOADING"', () => {
    const props = {
      ...defaultProps,
      loadStatus: 'LOADING',
    };
    const layout = mount(<Layout {...props} />);
    expect(layout.find('Spinner').exists()).toBe(true);
    expect(layout.debug()).toMatchSnapshot();
  });
});
