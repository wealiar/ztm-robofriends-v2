import { shallow } from 'enzyme';
import React from 'react';
import App from './App';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);
const storeStateMock = {
    searchRobots: {
        searchField: 'D'
    },
    requestRobots: {
        isPending: false,
        robots: [],
        error: ''
    }
};
let store;
let wrapper;

beforeEach(() => {
    store = mockStore(storeStateMock);
    wrapper = shallow(<App store={store} />).shallow();
});

describe('App smart component', () => {
    it('expect to render App component', () => {
        expect(wrapper).toMatchSnapshot();
    });
});