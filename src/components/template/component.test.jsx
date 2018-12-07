import React from 'react';
import { shallow } from 'enzyme';
import Template from './component';

const defaultProps = {
  tested: true,
  onClick: jest.fn(),
};

describe('<Template /> component', () => {
  it('renders without errors', () => {
    const template = shallow(<Template {...defaultProps} />);

    expect(() => template).not.toThrow();
    expect(template).toMatchSnapshot();
  });
});
