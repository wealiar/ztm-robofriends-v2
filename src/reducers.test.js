import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

import * as reducers from './reducers'

describe('searchRobots', () => {
    const initialSearchState = {
        searchField: ''
    };

    it('should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual(initialSearchState);
    });

    it('should handle CHANGE_SEARCH_FIELD', () => {
        expect(reducers.searchRobots(initialSearchState, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({
            searchField: 'abc'
        });
    });
});

describe('requestRobots', () => {
    const initialRobotsState = {
        isPending: false,
        robots: [],
        error: ''
    };

    it('should return the initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialRobotsState);
    });

    it('should handle REQUEST_ROBOTS_PENDING action', () => {
        expect(reducers.requestRobots(initialRobotsState, { type: REQUEST_ROBOTS_PENDING })).toEqual({
            robots: [],
            isPending: true,
            error: ''
        });
    });

    it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
        expect(reducers.requestRobots(initialRobotsState, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: '123',
                name: 'test',
                email: 'test@test.com',
            }]
        })).toEqual({
            robots: [{
                id: '123',
                name: 'test',
                email: 'test@test.com',
            }],
            isPending: false,
            error: ''
        });
    });

    it('should handle REQUEST_ROBOTS_FAILED action', () => {
        expect(reducers.requestRobots(initialRobotsState, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'NOOOO!!!!'
        })).toEqual({
            robots: [],
            isPending: false,
            error: 'NOOOO!!!!'
        });
    });
})