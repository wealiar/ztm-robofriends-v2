import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';

it('expect to render Header component', () => {
    expect(shallow(<Header />)).toMatchSnapshot();
});

it('expect not to update component after update()', () => {
    const wrapper = shallow(<Header />);
    wrapper.update();
    expect(wrapper.instance().shouldComponentUpdate({}, {})).toBe(false);
});