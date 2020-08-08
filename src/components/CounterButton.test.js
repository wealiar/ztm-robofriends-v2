import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

describe('CounterButton smart component', () => {
    it('expect to render CounterButton component', () => {
        const mockColor = 'green';
        const wrapper = shallow(<CounterButton color={mockColor} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('expect to get initial value, which is 1', () => {
        const wrapper = shallow(<CounterButton />);

        expect(wrapper.text()).toBe('Count: 1');
        expect(wrapper.state()).toEqual({ count: 1 });
    });

    it('expect to click button and get incremented value, which is 2', () => {
        const wrapper = shallow(<CounterButton />);

        wrapper.simulate('click');

        expect(wrapper.text()).toBe('Count: 2');
        expect(wrapper.state()).toEqual({ count: 2 });
    });

    it('expect to update counter and value have to stay as initial', () => {
        const wrapper = shallow(<CounterButton />);
        expect(wrapper.text()).toBe('Count: 1');

        wrapper.update();
        expect(wrapper.text()).toBe('Count: 1');
    });

    it('set color using props and expect have property color with this value', () => {
        expect.assertions(4);
        const wrapper = shallow(<CounterButton color='red' />);

        expect(wrapper.prop('style')).toStrictEqual({
            color: 'red'
        });
        expect(wrapper.props().style.color).toEqual('red');

        wrapper.setProps({ 'color': 'blue' });
        wrapper.simulate('click'); // added click to re-render component
        expect(wrapper.prop('style')).toStrictEqual({
            color: 'blue'
        });
        expect(wrapper.props().style.color).toEqual('blue');

    });
});