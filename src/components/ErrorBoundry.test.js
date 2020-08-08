import { shallow } from 'enzyme';
import React from 'react';
import ErrorBoundry from './ErrorBoundry';

let wrapper;
const testDiv = <div>{'love testing'}</div>;
const errorMessage = <h1>Ops. That is not good</h1>;

beforeEach(() => {
    wrapper = shallow(<ErrorBoundry>{testDiv}</ErrorBoundry>);
});

function FuncToSimulateError() {
    return null;
}

describe('ErrorBoundry smart component', () => {
    it('expect to render ErrorBoundry component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('when no error, expect to get my test div', () => {
        expect(wrapper.instance().render()).toEqual(testDiv);
    });

    it('when there is an error, expect to get error text', () => {
        wrapper.instance().setState({ hasError: true });
        expect(wrapper.instance().render()).toEqual(errorMessage);
    });

    it('catch an error and expect to get error text', () => {
        const wrapper2 = shallow(<ErrorBoundry><FuncToSimulateError /></ErrorBoundry>);
        const error = new Error('I\'m an error');
        wrapper2.find(FuncToSimulateError).simulateError(error);

        expect(wrapper2.instance().render()).toEqual(errorMessage);
    });

});
