import * as constants from './constants';
import * as actions from './actions';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import { apiCall } from './api/api';

const nock = require('nock');

let mockStore = configureMockStore([thunkMiddleware]);

describe('setSearchField action', () => {
    it('should create an action to search robots', () => {
        const text = 'wooo';
        const expectedAction = {
            type: constants.CHANGE_SEARCH_FIELD,
            payload: text,
        };

        expect(actions.setSearchField(text)).toEqual(expectedAction);
    });
});

describe('requestRobots action', () => {
    mockStore = mockStore();

    it('handles requesting robots API - pending', () => {
        mockStore.dispatch(actions.requestRobots());
        const action = mockStore.getActions();

        // console.log('action is', action);
        const expectedAction = {
            type: constants.REQUEST_ROBOTS_PENDING
        };
        expect(action[0]).toEqual(expectedAction);
    });

    it('handles requesting robots API - success', async () => {
        expect.assertions(1);

        const scope = nock('https://jsonplaceholder.typicode.com')
            .persist()
            .get('/users')
            .reply(200, {
                data: [{
                    id: 1,
                    name: "Leanne Graham",
                    username: "Bret",
                    email: "Sincere@april.biz",
                    address: {
                        street: "Kulas Light",
                        suite: "Apt. 556",
                        city: "Gwenborough",
                        zipcode: "92998-3874",
                        geo: {
                            lat: "-37.3159",
                            lng: "81.1496"
                        }
                    },
                    phone: "1-770-736-8031 x56442",
                    website: "hildegard.org",
                    company: {
                        name: "Romaguera-Crona",
                        catchPhrase: "Multi-layered client-server neural-net",
                        bs: "harness real-time e-markets"
                    }
                }],
            }, {
                'Access-Control-Allow-Origin': '*',
                'Content-type': 'application/json',
            }
            );

        return apiCall('https://jsonplaceholder.typicode.com/users').then(data => {
            mockStore.dispatch(actions.requestRobots());
            const action = mockStore.getActions();

            // console.log('action is', action);
            const expectedAction = {
                type: constants.REQUEST_ROBOTS_SUCCESS,
                payload: data
            };
            expect(action[1]).toEqual(expectedAction);
        });
    });

    // it('handles requesting robots API - error', async () => {
    //     expect.assertions(1);

    //     const scope = nock('https://test.com')
    //         .persist()
    //         .get('/test')
    //         .replyWithError('test');

    //     try {
    //         return apiCall('https://test.com/test');
    //     } catch (error) { 
    //         mockStore.dispatch(actions.requestRobots());
    //         const action = mockStore.getActions();

    //         console.log('action is', action);
    //         const expectedAction = {
    //             type: constants.REQUEST_ROBOTS_FAILED,
    //             payload: error
    //         };
    //         expect(action[2]).toEqual(expectedAction);
    //     }
    // });
});