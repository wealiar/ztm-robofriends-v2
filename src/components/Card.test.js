import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';

it('expect to render Card component', () => {
    expect(shallow(<Card />).length).toBe(1);
});

it('card snapshot test', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
});
